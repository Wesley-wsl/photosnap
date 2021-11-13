import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.1rem;

    div {
        cursor: pointer;
    }

    nav > ul {
        display: flex;
        gap: 2rem;

        li {
            cursor: pointer;
            text-transform: uppercase;
            font-size: 0.8rem;
            transition: opacity 0.1s ease-in-out;
            font-weight: bold;
            letter-spacing: 0.05rem;
            &:hover {
                opacity: 0.6;
            }
        }
    }

    button {
        background-color: #000;
        color: #fff;
        border-radius: 0.15rem;
        cursor: pointer;
        height: 2.5rem;
        width: 9.85rem;
        letter-spacing: 0.1rem;
        font-size: 12px;
        transition: all 0.3s ease-in-out;
        word-spacing: 0.1rem;
        font-weight: bold;
        text-transform: uppercase;
        &:hover {
            background-color: #fff;
            color: #000;
            border: 0.1rem solid #000;
        }
    }
`;
