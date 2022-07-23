import styled from  'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.COLOR_SECONDARY};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    margin-bottom: .8rem;
    border-radius: 1rem;

    > input {
        height: 5.6rem;
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};

        padding: 1.6rem;

        background: transparent;
        border: none;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    } 

    > svg {
        margin-left: 1.6rem;
    }

`;