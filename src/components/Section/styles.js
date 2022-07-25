import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 22.5rem;

    padding: 3.2rem;
    border-radius: .8rem;
    margin: 2.8rem 0;

    background-color: ${({theme}) => theme.COLORS.COLOR_BACKGROUND_SECTION};

    > h2 {
        font-size: 2.4rem;
        line-height: 3.2rem;
        font-weight: 700;
    }
     svg {
        margin: .8rem 0 1.5rem;
     }

     > p {
        font-size: 1.6rem;
        margin-bottom:3rem;
        color: ${({theme}) => theme.COLORS.COLOR_TEXT_SECTION};
     }
`;