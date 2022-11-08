import {Container, Profile} from "./styles";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import {Input} from "../../components/Input";
import { useNavigate } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({children}) {

    const navigate = useNavigate();

    const {signOut, user} = useAuth();

    function handleProfile() {
        navigate("/profile");
    }

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return(
        <Container>
            <h1>RocketMovies</h1>

            {children}
            

            <Profile>
                <div>
                    <p>{user.name}</p>
                    <button 
                    type="button"
                    onClick={signOut}
                    >
                        sair
                    </button>
                </div>

                <img 
                src={avatarURL} 
                alt="Imagem do perfil" 
                onClick={handleProfile}
                />
            </Profile>
        </Container>
    )
}