import styled from "styled-components";

import {Link} from "react-router-dom";

export const Container = styled.header`
    width: 100%;
    
    height: 10.5rem;
    padding: 4rem 25rem;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.COLOR_SECONDARY };

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.COLOR_PRIMARY};
    }

    > div:nth-child(2) {
        width: 63rem;
        margin-top: .8rem;

    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: .9rem;

    > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
        border: 2px solid ${({theme}) => theme.COLORS.COLOR_TEXT};

        cursor: pointer;
    }

    > div {
        p {
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.WHITE};
        }

        button {
        width: 100%;
        font-size: 1.4rem;
        text-align: end;
        color: ${({theme}) => theme.COLORS.COLOR_TEXT};
        border: 0;
        background: none;
        }
    }

    
`;
