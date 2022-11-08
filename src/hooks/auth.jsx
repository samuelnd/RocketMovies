import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const [data, setData] = useState({});

    async function signIn({email, password}) {
        try {
            const response = await api.post("/sessions", {email, password});
            const {user, token} = response.data;

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovies:token", token);

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({user, token});
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível acessar o sistema, tente novamente mais tarde!!");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketmovies:token");
        localStorage.removeItem("@rocketmovies:user");

        setData({});
    }

    async function updateProfile({user, avatarFile}) {
        try {
            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }


            await api.put("/users", user);
            localStorage.setItem("rocketmovies:user", JSON.stringify({user}));

            setData({user, token: data.token});
            alert("Seu perfil foi atualizado com sucesso!!!");


        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar seu perfil, tente novamente!!!")
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketmovies:user");
        const token = localStorage.getItem("@rocketmovies:token");

        if(user && token) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            setData({token, user: JSON.parse(user)})
        }
    }, [])

    return (

        <AuthContext.Provider value={{
            signIn, 
            signOut ,
            updateProfile,
            user: data.user,
            }}
            >
            {children}
        </AuthContext.Provider>
    )
}


function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth}