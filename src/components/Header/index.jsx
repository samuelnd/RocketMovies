import {Container, Profile} from "./styles";

import {Input} from "../../components/Input";

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>

            
            <div >
                <Input placeholder="Pesquisar pelo título" />
            </div>

            <Profile>
                <div>
                    <p>Samuel Nunes</p>
                    <button type="button">sair</button>
                </div>

                <img src="http://github.com/samuelnd.png" alt="Imagem do perfil" />
            </Profile>
        </Container>
    )
}