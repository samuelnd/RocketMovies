import { useState } from "react";

import {api} from "../../services/api";
import { useNavigate } from "react-router-dom";

import {FiUser, FiMail, FiLock, FiArrowLeft} from "react-icons/fi";
import {Container, Form, Background} from "./styles";

import {Link} from "react-router-dom";

import {Input} from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password){
            return alert("Informe todos os campos!");
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Seu cadastro foi realizado com sucesso!!");
            navigate(-1);
        }).catch( error => {
            if(error.message) {
                alert(error.response.data.message);
            }else{
                alert("Não foi possível realizar seu cadastro no momento!!");
            }
        })
        
    }


    return(
        <Container>
            
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>
                <Input 
                placeholder="Nome" 
                type="text" 
                icon={FiUser}
                onChange={e => setName(e.target.value)}
                />

                <Input 
                placeholder="E-mail" 
                type="text"  
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                placeholder="Senha" 
                type="password" 
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <ButtonText 
                title= "Cadastrar"
                onClick={handleSignUp}
                />

                <Link to="/"> <FiArrowLeft /> Voltar para o login</Link>
            </Form>

            <Background />
        </Container>
    )
}