import {Container} from "./styles";

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>

            <input type="search" placeholder="Pesquisar pelo título"/>
        </Container>
    )
}