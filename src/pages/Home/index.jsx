import {Container, Content} from "./styles";

import { Header} from "../../components/Header";
import { Section } from "../../components/Section";
import { NoteMovie } from "../../components/NoteMovie";
import { Tags } from "../../components/Tags";
import {Input} from "../../components/Input";
import { GrAdd } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Home() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] =useState([]);
    const [tags, setTags] = useState ([]);

    const navigate = useNavigate();

    console.log(movies)

    function handleDetails(id){
        navigate(`/details/${id}` )
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get('/tags');
            setTags(response.data)
        }
        fetchTags();
    },[])

    useEffect (() => {
        async function fetchMovies() {
            const response = await api.get(`/movies?title=${search}&tags`);
            setMovies(response.data);
        }

        fetchMovies();
    }, [search]);

    return(
        <>
            <Header>
            <div >
                <Input 
                placeholder="Pesquisar pelo título" 
                onChange={e => setSearch(e.target.value)}
                />
            </div>
            </Header>
        <Container>

            <Content>
                <div>
                    <h1>Meus Filmes</h1>
                    
                    <Link to="/new"> < GrAdd/> Adicionar filme</Link>
                </div>

                {
                    
                    movies.map((movie) => (
                        <Section>
                        <NoteMovie
                        key={String(movie.id)}
                        data={movie}
                        onClick={() => handleDetails(movie.id)}
                        >

                        </NoteMovie>

                        </Section>
                    ))
                }      
                
            </Content>

        </Container>
        </>
    )
}