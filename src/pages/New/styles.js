import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 4rem 25rem;

    a {
        display: flex;
        align-items: center;
        gap: .8rem;
    }

    .tags {
        background-color: #000;
        display: flex;
        align-items: center;
        gap: 1rem;

        border-radius: .8rem;

        padding: 1.6rem;

    }
    
`;

export const Content = styled.section`

     .row {
        display: flex;
        gap: 4rem;
        
        margin-bottom: 2rem;
    }

    > h1{
        font-size: 3.6rem;
        line-height: 4.7rem;
        margin: 2.4rem 0 4rem;
    }

    h2 {
        font: 2rem;
        line-height: 2.6rem;
        margin: 2.4rem 0 4rem;
        
        color: ${({theme}) => theme.COLORS.COLOR_TEXT};
    }

    .tags {
        background-color: #000;
        display: flex;
        align-items: center;
        gap: 1rem;

        border-radius: .8rem;

        padding: 1.6rem;

    }

    .saved {
        display: flex;
        margin-top: 4rem;
        gap: 4rem;

        div:nth-child(1) {  
            button {
            background: #000;
            color: ${({theme}) => theme.COLORS.COLOR_PRIMARY};
            }
        }
    }
`;

