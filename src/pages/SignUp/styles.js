import styled from "styled-components";

import background_Img from "../../assets/background.png";
 
export const Container = styled.div`
    height: 100vh;

    display: flex;
    justify-content: stretch;
        
`;

export const Form = styled.form`
    padding: 0 16rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    > h1 {
        font-size: 4.8rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.COLOR_PRIMARY};
    }

    > p {
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.COLOR_TEXT};
    }

    >h2 {
        font-size: 2.4rem;
        margin: 4.8rem 0;
        text-align: left;
    }

    > div:nth-child(6) {
       margin-bottom: 1.6rem;
    }

    > a {
        display: flex;
        align-items: center;
        justify-content: center ;
        margin-top: 4.2rem;
    }

    > svg {
        width: 1.6rem;
        height: 1.6rem;
        margin-right: .8rem; 
    }
`;

export const Background = styled.div`
    border: none;
    flex: 1;
    background: url(${background_Img}) no-repeat center center;
    background-size: cover;
`;
