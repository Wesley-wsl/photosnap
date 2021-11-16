import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: "DM Sans", Arial, Helvetica, sans-serif;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: #000;
}

`;

export const MainButton = styled.button`
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 600;
    transition: text-decoration 0.4s linear;
    position: relative;

    svg {
        margin-left: 1.3rem;
    }

    &:after {
        content: "";
        width: 0;
        height: 0.07rem;
        position: absolute;
        bottom: -0.1rem;
        background-color: #d9d9d9d9;
        transition: width 0.2s ease-in;
    }

    &:hover:after {
        width: 6rem;
    }
`;

export const IntroPage = styled.section`
    display: flex;
    flex-direction: row;
    background-color: #000;

    @media (min-width: 788px) {
        height: 30.6rem;
    }

    @media (max-width: 788px) {
        flex-direction: column-reverse;
        position: relative;
        padding-bottom: 6rem;

        &::before {
            display: none;
        }
    }

    &::before {
        content: "";
        margin-top: 8rem;
        height: 12rem;
        width: 0.4rem;
        background: linear-gradient(#5a77ff, #bc7198, #ffc593);
    }

    div:nth-child(1) {
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 30rem;
        flex: 0.8;
        margin-left: 2rem;
        h1 {
            font-size: 3rem;
            margin: 9rem 0 1rem 0;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
        }

        p {
            color: #d9d9d9c9;
            max-width: 24rem;
            line-height: 1.5rem;
        }
    }

    div:nth-child(2) {
        flex: 1;

        img {
            max-width: 100%;
            height: 30.6rem;
            object-fit: cover;
        }
    }
`;
