import styled from "styled-components";

import bgBeta from "../../assets/shared/desktop/bg-beta.jpg";

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url(${bgBeta});
    height: 17.45rem;
    color: #fff;
    position: relative;

    @media (max-width: 601px) {
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }

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

        @media (max-width: 601px) {
            font-size: 1.4rem;
        }
    }

    button {
        color: #fff;
    }
`;
