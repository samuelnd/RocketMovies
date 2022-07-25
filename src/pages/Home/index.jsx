import {Container, Content} from "./styles";

import { Header} from "../../components/Header";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { GrAdd } from "react-icons/gr";


export function Home() {
    return(
        <>
            <Header />
        <Container>

            <Content>
                <div>
                    <h1>Meus Filmes</h1>
                    <a href="#"> < GrAdd/> Adicionar filme</a>
                </div>

                <Section 
                title="Interestellar"
                description="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. 
                Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu 
                quarto está assombrado por um fantasma que tenta se..."
                >
                    <Tags title="Ficção Científica"/>
                    <Tags title="Drama"/>
                    <Tags title="Família"/>
                </Section>

                <Section 
                title="Interestellar"
                description="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. 
                Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu 
                quarto está assombrado por um fantasma que tenta se..."
                >
                    <Tags title="Ficção Científica"/>
                    <Tags title="Drama"/>
                    <Tags title="Família"/>  
                </Section>

                <Section 
                title="Interestellar"
                description="Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. 
                Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu 
                quarto está assombrado por um fantasma que tenta se..."
                >
                    <Tags title="Ficção Científica"/>
                    <Tags title="Drama"/>
                    <Tags title="Família"/>
                </Section>
                
            </Content>


            
        </Container>
        </>
    )
}