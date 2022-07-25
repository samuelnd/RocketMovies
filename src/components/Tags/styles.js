import styled from "styled-components";

export const Container = styled.span`
    height: 1.4rem;
    padding: .5rem 1.6rem;

    margin-right: .8rem;

    border-radius: .8rem;
    background-color: ${({theme}) => theme.COLORS.COLOR_TEXT_BUTTON};
`;