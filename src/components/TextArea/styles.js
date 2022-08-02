import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 27.4rem;

    padding: 1.9rem;
    border-radius: .8rem;

    border: none;
    resize: none;

    background-color: ${({theme}) => theme.COLORS.COLOR_SECONDARY};

    color: ${({theme}) => theme.COLORS.WHITE};

    &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_100};

        font-size: 1.6rem;

    }
`;