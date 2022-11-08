import styled from "styled-components";

export const Container = styled.button`
    width: 100%;

    border: none;
    cursor: pointer;

    display: flex;
    flex-direction: column;

    background-color: transparent;
    > h2 {
        font-size: 2.4rem;
        line-height: 3.2rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.COLOR_TEXT};
    }
     svg {
        margin: .8rem 0 1.5rem;
     }

     > p {
        font-size: 1.6rem;
        margin-bottom:3rem;
        text-align: left;
        color: ${({theme}) => theme.COLORS.COLOR_TEXT_SECTION};
     }

     > footer {
        display: flex;
     }
`;