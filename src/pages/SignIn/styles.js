import styled from 'styled-components';

import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    height: 100vh;
    padding: 0 16rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 4.8rem;
        font-weight: 700;
        line-height: 6.3rem;

        color: ${({theme}) => theme.COLORS.COLOR_PRIMARY};
    }

    > p {
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: ${({theme}) => theme.COLORS.COLOR_TEXT};
    }

    > h2 {
        font-size: 2.4rem;
        line-height: 3.2rem;
        text-align: left;

        margin: 4.8rem 0;
    }

    > div:nth-child(5) {
        margin-bottom: 1.6rem ;
    }

    > a {
        display: flex;
        align-items: center;
        justify-content: center ;
        margin-top: 4.2rem;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size:  cover;
`;