import { useState } from "react";
import { api } from "../../services/api";

import {Container, Content} from "./styles";
import {FiArrowLeft} from "react-icons/fi";

import {Header} from "../../components/Header";
import {TextArea} from "../../components/TextArea";
import {ButtonText} from "../../components/ButtonText";
import {NoteItem} from "../../components/NoteItem";

import {Link} from "react-router-dom";
import {Input} from "../../components/Input";


export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const [tags, setTags] = useState([]);
    const [ newTags, setNewTags] = useState("");


    function handleAddTag() {
        setTags(prevState => [...prevState, newTags]);
        setNewTags("");
    }

    async function handleAddMovies() {
        console.log({title, description, tags, rating})
        
        
        await api.post("/movies",{
            title,
            description,
            rating,
            tags
        });

        alert("Filme cadastrado com sucesso na sua lista de favoritos")
        

    }
    

    return(
        <>
            <Header>
                <Input placeholder ="Pesquisar pelo título" />
            </Header>
            <Container>
                <Link to="/"> <FiArrowLeft /> Voltar</Link>

                <Content>
                    <h1>Novo Filme</h1>

                    <div className="row">
                        <Input 
                        placeholder="Título"
                        onChange= { e => setTitle(e.target.value)}
                        />
                        <Input 
                        placeholder="Sua Nota(de 0 a 5)"
                        type="number"
                        onChange= { e => setRating(e.target.value)}
                        />
                    </div>

                    <TextArea 
                    placeholder="Observações"
                    onChange = {e => setDescription(e.target.value)}
                    />

                    <h2>Marcadores</h2>

                    <div className="tags">

                        {
                            tags.map((tag, index) => (
                                <NoteItem 
                                key={String(index)}
                                value={tag}
                                />
                            ))

                        }

                        <NoteItem 
                        isNew
                        placeholder="Novo Marcador" 
                        onChange={e => setNewTags(e.target.value)}
                        value={newTags}
                        onClick={handleAddTag}
                        />
                    </div>

                    <div className="saved">
                    <ButtonText title="Excluir Filme"  />

                    <ButtonText 
                    title="Adicionar Filme"
                    onClick={handleAddMovies}  
                    />
                    </div>
                    
                </Content>
                
            </Container>
        
        </>
    )
}