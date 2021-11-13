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
