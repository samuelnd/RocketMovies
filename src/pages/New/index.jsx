import {Container, Content} from "./styles";
import {FiArrowLeft} from "react-icons/fi";

import {Header} from "../../components/Header";
import {TextArea} from "../../components/TextArea";
import {ButtonText} from "../../components/ButtonText";
import {NoteItem} from "../../components/NoteItem";

import {Link} from "react-router-dom";
import {Input} from "../../components/Input";


export function New() {
    return(
        <>
            <Header />
            <Container>
                <Link to="/"> <FiArrowLeft /> Voltar</Link>

                <Content>
                    <h1>Novo Filme</h1>

                    <div className="row">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua Nota(de 0 a 5)"/>
                    </div>

                    <TextArea placeholder="Observações"/>

                    <h2>Marcadores</h2>

                    <div className="tags">
                        <NoteItem placeholder="Novo Marcador" isNew/>
                        <NoteItem value="ReactJs"/>
                        <NoteItem value="ReactJs"/>
                    </div>

                    <div className="saved">
                    <ButtonText title="Excluir Filme"  />

                    <ButtonText title="Excluir Filme"  />
                    </div>
                    
                </Content>
                
            </Container>
        
        </>
    )
}