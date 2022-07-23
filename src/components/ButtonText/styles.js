import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    > button {
        width: 100%;
        height: 5.6rem;

        border: 0;
        margin-bottom: .8rem;
        border-radius: .8rem;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.6rem;
        line-height: 2.1rem;
        font-weight: 500;

        background: ${({theme}) => theme.COLORS.COLOR_PRIMARY};
        color: ${({theme}) => theme.COLORS.COLOR_TEXT_BUTTON};
    }
`;