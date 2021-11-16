import styled from "styled-components";

export const FeaturesContent = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;
    row-gap: 10rem;
    padding: 9rem;
    margin: 3rem 0;

    @media (max-width: 968px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 788px) {
        grid-template-columns: 1fr;
        row-gap: 5rem;
        padding: 3rem 0;

        div > p:nth-child(3) {
            max-width: 16rem;
        }
    }
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
