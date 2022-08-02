import styled from "styled-components";

export const Container =styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};


    border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};
    
    margin-bottom: .8rem;
    border-radius: 1rem;
    padding-right: 1.6rem;

    > input {
        height: 5.6rem;
        width: 100%;
        
        border: none;
        background: transparent;
        text-align: center;

        color: ${({theme}) => theme.COLORS.WHITE};
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.COLOR_PRIMARY};
    }

    > button{
        border: none;
        background: none;
    }

    &::placeholder { 
        color: ${({theme}) => theme.COLORS.WHITE};
    }
`;