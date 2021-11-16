import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.1rem;
    z-index: 99;

    div > div {
        cursor: pointer;
    }
    @media (max-width: 768px) {
        justify-content: space-between;
        nav {
            display: none;
        }

        button {
            display: none;
        }
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

export const MenuMobile = styled.div`
    cursor: default;
    transition: all 0.2s ease-in-out;
    @media (min-width: 768px) {
        display: none;
    }
    @media (max-width: 768px) {
        .openNav {
            cursor: pointer;
            padding: 0.3rem;
            z-index: 99;
            div {
                height: 1px;
                width: 2rem;
                background-color: #000;
            }

            div:nth-child(1) {
                margin-bottom: 0.4rem;
            }
        }
    }
    nav {
        transition: height 0.3s linear;
        height: 192px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        top: 3rem;
        left: 0;
        right: 0;
        position: absolute;
        background-color: #fff;
        height: 12rem;
        z-index: 2;
        width: 100%;

        ul {
            flex-direction: column;
            gap: 1.4rem;
            align-items: center;
            transition: height 0.3s linear;
            height: 192px;

            li > hr {
                display: block;
                background-color: #111;
                opacity: 0.4;
                margin-bottom: 1rem;
                height: 0.1rem;
                width: 200%;
                align-items: center;
                margin-left: -2rem;
            }

            li > button {
                display: block;
                width: 200%;
                margin-left: -2rem;
            }
        }
    }

    .exit {
        transition: height 0.3s linear;
        height: 0px;
    }

    .closeIcon {
        div:nth-child(1) {
            transition: transform 0.3s linear;
            transform: rotate(45deg);
        }
        div:nth-child(2) {
            transition: transform 0.3s linear;
            transform: rotate(135deg);
            margin-top: -7.5px;
        }
    }
    .defaultIcon {
        div:nth-child(1) {
            transition: transform 0.3s linear;
            transform: rotate(180deg);
        }
        div:nth-child(2) {
            transition: transform 0.3s linear;
            transform: rotate(0);
            margin-top: 0px;
        }
    }
`;
