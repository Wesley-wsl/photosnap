import styled from "styled-components";

export const Container = styled.footer`
    background-color: #000;
    color: #fff;
    height: 15rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 4rem;

    .socialMedias {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 3rem;
        > img {
            width: 11rem;
            cursor: pointer;
        }
        ul {
            display: flex;
            gap: 1rem;
        }
    }

    nav > ul {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        li {
            font-size: 0.9rem;
            letter-spacing: 0.1rem;
            cursor: pointer;
            transition: opacity 0.1s ease-in-out;
            font-weight: 600;

            a {
                color: #fff;
            }

            &:hover {
                opacity: 0.6;
            }
        }
    }

    div:nth-last-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        margin-right: 4rem;
        p {
            color: #d9d9d989;
        }
    }

    button {
        color: #fff;
        svg {
            margin-left: 1.2rem;
        }
    }
`;
