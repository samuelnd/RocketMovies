import {FiArrowLeft, FiCamera} from "react-icons/fi";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import{Input} from "../../components/Input";
import{ButtonText} from "../../components/ButtonText";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import {Container, Form, Avatar} from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Profile() {
    const {user, updateProfile} = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();
    
    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder; 
    const [avatar, setAvatar] = useState(avatarURL); 
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }


        await updateProfile({user: updated, avatarFile});
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <Link to="/"><FiArrowLeft /> Voltar</Link>
            </header>

            <Form>
                <Avatar >
                    <img src={avatar} alt="Imagem de perfil" />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                        id="avatar" 
                        type="file"
                        onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <Input 
                placeholder="Nome" 
                onChange={e => setName(e.target.value)} 
                value={name}
                />
                <Input 
                placeholder="E-mail" 
                onChange={e => setEmail(e.target.value)} 
                value={email}
                />
                <Input 
                placeholder="Senha atual" 
                onChange = {e => setPasswordOld(e.target.value)}

                />
                <Input 
                placeholder="Nova Senha" 
                onChange = {e => setPasswordNew(e.target.value)}

                />

                <ButtonText 
                title="Salvar"
                onClick={handleUpdate}
                />
            </Form>
        </Container>
    )
}