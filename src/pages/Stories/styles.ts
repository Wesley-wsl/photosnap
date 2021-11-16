import styled from "styled-components";

import moonAppalacia from "../../assets/stories/desktop/moon-of-appalacia.jpg";

export const Intro = styled.section`
    color: #fff;
    background-image: url(${moonAppalacia});
    background-size: cover;
    background-repeat: no-repeat;
    height: 40rem;
    padding-left: 6rem;

    @media (max-width: 601px) {
        padding-left: 1rem;
        font-size: 0.9rem;
    }

    p:nth-child(1) {
        padding-top: 6rem;
        margin-bottom: 2rem;
        text-transform: uppercase;
    }

    h1 {
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 0.4rem;
        max-width: 25rem;

        @media (max-width: 601px) {
            font-size: 2rem;
            letter-spacing: 0.3rem;
            margin-bottom: 1rem;
        }
    }

    p:nth-child(3) {
        color: #d9d9d9ff;

        span {
            color: #fff;
            font-weight: 600;
        }
    }

    p:nth-child(4) {
        margin-top: 1rem;
        color: #d9d9d999;
        max-width: 26rem;
        margin-bottom: 2rem;
    }

    button {
        color: #fff;
    }
`;
