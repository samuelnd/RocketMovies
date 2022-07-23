import {Container} from "./styles";

export function ButtonText({title, ...rest}) {
    return (
        <Container>
            <button type="button" {...rest}>
                {title}
            </button>
        </Container>
    )
}