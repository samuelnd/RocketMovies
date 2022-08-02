import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    padding: 0 25rem;

    margin-top: 4rem;

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.6rem;

        margin: 2.4rem 0 4rem;
    }

    img {
        width: 1.6rem;
        height: 1.6rem;

        border-radius: 50%;
    }

    h1 {
        margin: 2.4rem 0;
        display: flex;
        align-items: center;
        gap: 1.9rem;
    }
`;

export const Content = styled.div`

    margin-top: 4.8rem;

    p {
        text-align: justify;
    }
`;