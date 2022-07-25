import {FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from "react-icons/fi";

import{Input} from "../../components/Input";
import{ButtonText} from "../../components/ButtonText";


import {Container, Form, Avatar} from "./styles";

export function Profile() {
    return (
        <Container>
            <header>
                <a href="/"><FiArrowLeft /> Voltar</a>
            </header>

            <Form>
                <Avatar >
                    <img src="http://github.com/samuelnd.png" alt="Imagem de perfil" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file"/>
                    </label>
                </Avatar>

                <Input placeholder="Nome" />
                <Input placeholder="E-mail" />
                <Input placeholder="Senha atual" />
                <Input placeholder="Nova Senha" />

                <ButtonText title="Salvar"/>
            </Form>
        </Container>
    )
}