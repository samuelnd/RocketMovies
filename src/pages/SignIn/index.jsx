import {FiMail, FiLock} from "react-icons/fi";
import { Link } from "react-router-dom";
import {Background, Container, Form} from "./styles";
import { useAuth } from "../../hooks/auth";

import {Input} from "../../components/Input";
import {ButtonText} from "../../components/ButtonText";

import { useState } from "react";

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {signIn} = useAuth();

    function handleSignIn() {
        signIn({email, password});
    }


    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>

                <Input 
                placeholder="E-mail"  
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />
                
                <Input 
                placeholder="Senha" 
                icon={FiLock}
                type="password"
                onChange={e => setPassword(e.target.value)}
                />

                <ButtonText 
                title="Entrar"
                onClick={handleSignIn}
                />

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background />   
        </Container>
    )
}