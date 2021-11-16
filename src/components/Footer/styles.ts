import styled from "styled-components";

export const Container = styled.footer`
    background-color: #000;
    color: #fff;
    height: 15rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 4rem;

    @media (max-width: 860px) {
        grid-template-columns: 1fr 1fr;
        height: 20rem;
    }

    @media (max-width: 660px) {
        grid-template-columns: 1fr;
        height: 27rem;
    }

    .socialMedias {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 3rem;

        @media (max-width: 660px) {
            margin: 0;
            > img {
                margin-bottom: 2rem;
            }
            ul > li {
                margin-bottom: 2rem;
            }
        }
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

        @media (max-width: 860px) {
            margin-top: 2rem;
            gap: 2rem;
        }
    }

    button {
        color: #fff;
        svg {
            margin-left: 1.2rem;
        }
    }
`;
