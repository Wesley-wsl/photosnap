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

`;

export const MainButton = styled.button`
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 600;
    img {
        margin-left: 1.3rem;
    }
`;
