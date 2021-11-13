import styled from "styled-components";

import bgBeta from "../../assets/shared/desktop/bg-beta.jpg";

export const IntroFeatures = styled.section`
    display: flex;
    flex-direction: row;
    background-color: #000;
    height: 30.6rem;

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

export const FeaturesContent = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;
    row-gap: 10rem;
    padding: 9rem;
    margin: 3rem 0;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        img {
            margin-bottom: 2rem;
        }
        p:nth-child(2) {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        p:nth-child(3) {
            font-size: 0.96rem;
            text-align: center;
            opacity: 0.7;
            line-height: 1.5rem;
        }
    }

    div:nth-child(2) {
        img {
            margin-top: 1rem;
            margin-bottom: 3.5rem;
        }
    }
`;

export const EndFeatures = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(${bgBeta});
    height: 17.45rem;
    color: #fff;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 0.4rem;
        background: linear-gradient(#5a77ff, #bc7198, #ffc593);
    }

    h2 {
        font-size: 2.5rem;
        letter-spacing: 0.2rem;
    }

    button {
        color: #fff;
    }
`;
