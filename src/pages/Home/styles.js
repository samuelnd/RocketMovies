import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0 25rem;

    margin: 4.7rem 0 3.8rem;

`;

export const Content = styled.div`
    width: 100%;

    > div {
        display: flex;
        justify-content: space-between;

        a {
            width: 20.7rem;
            height: 4.8rem;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: .8rem;

            color: ${({theme}) => theme.COLORS.COLOR_TEXT_ADD};
            background: ${({theme}) => theme.COLORS.COLOR_PRIMARY};
            border-radius: .8rem;
        }
    }

    > p {
        color: red;
    }


`;