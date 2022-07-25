import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    

    > header {
        width: 100%;
        height: 14.4rem;

        padding: 6.4rem 25rem 0;

        background-color: ${({theme}) => theme.COLORS.COLOR_BACKGROUND_SECTION};
        
        > a {
            display: flex;
            align-items: center;

            font-size: 1.6rem;
            line-height: 2.1rem;
            gap: .5rem;
        }
    }
`;

export const Form = styled.form`
    max-width: 33rem;
    margin: -9rem auto 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    > div:nth-child(3), div:nth-child(5) {
        margin-bottom: 2.4rem;
    }
`;

export const Avatar = styled.div`
    width: 18.6rem;
    height: 18.6rem;

    position: relative;

    margin-bottom: 6.4rem;


    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        background-color: ${({theme}) => theme.COLORS.COLOR_PRIMARY};

        position: absolute;
        right: .8rem;
        bottom: .8rem;
        
        cursor: pointer;

        input{
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        }
    }
`;