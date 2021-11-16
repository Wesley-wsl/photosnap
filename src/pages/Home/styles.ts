import styled from "styled-components";

export const Container = styled.main`
    section:nth-child(1) {
        background-color: #000;
        color: #fff;
        @media (max-width: 768px) {
            &::before {
                display: none;
            }
        }

        &::before {
            content: "";
            margin-top: 1rem;
            height: 20rem;
            width: 0.4rem;
            background: linear-gradient(#5a77ff, #bc7198, #ffc593);
        }

        div > p {
            color: #d9d9d99f;
        }

        button {
            color: #fff;
            svg {
                margin-left: 1.3rem;
            }
        }
    }

    section:nth-child(2) {
        @media (max-width: 768px) {
            flex-direction: column;
        }
        .underlineWhite {
            &:hover:after {
                width: 7.6rem;
            }
        }
        h1 {
            max-width: 20rem;
        }
    }

    .underlineWhite {
        &::after {
            background-color: #000;
        }
    }
`;

export const AboutPhotosnap = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column-reverse;

        .photography {
            width: 100%;
            img {
                width: 100%;
                height: 10rem;
            }
        }
    }

    div {
        margin-bottom: -0.4rem;
    }

    .photography {
        max-width: 46rem;
        img {
            max-width: 100%;
            height: 35.5rem;
            object-fit: cover;
        }
    }
`;

export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 25rem;
    margin: 0 auto;
    margin-left: 2rem;
    @media (max-width: 768px) {
        padding: 6rem 0;
    }

    h1 {
        max-width: 23rem;
        font-size: 2.5rem;
        margin-bottom: 1.4rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
    }

    p {
        margin-bottom: 2rem;
        line-height: 1.5rem;
        color: #667;
    }
`;

export const StoriesContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    object-fit: cover;
    div {
        width: 25%;
        height: 28rem;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        position: relative;
        transition: all 0.3s;

        @media (max-width: 1070px) {
            width: 50%;
        }

        @media (max-width: 640px) {
            width: 100%;
        }

        &:hover {
            transform: translateY(-6%);
            cursor: pointer;
        }

        &:hover::after {
            content: "";
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 0.4rem;
            background: linear-gradient(
                45deg,
                #ffc593,
                #bc7198 25%,
                #5a77ff 50%
            );
        }

        &::before {
            content: "";
            width: 100%;
            height: 100%;
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.66) 0,
                transparent
            );
        }

        > article {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            width: 15rem;
            margin: 2rem auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            font-weight: 700;
            gap: 0.6rem;

            p:nth-child(1) {
                color: #fff;
                font-size: 1.2rem;
                letter-spacing: 0.04rem;
            }

            p:nth-child(2) {
                color: #d9d9d9e9;
                border-bottom: 0.01rem solid #d9d9d970;
                font-size: 0.8rem;
                letter-spacing: 0.04rem;
                padding-bottom: 1rem;
            }

            button:nth-child(3) {
                color: #fff;
                letter-spacing: 0.1rem;
                font-size: 0.7rem;

                svg {
                    margin-left: 7rem;
                }
            }
        }
    }
`;

export const Features = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 65rem;
    margin: 9rem auto 7rem auto;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 3rem;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 16rem;

        img {
            margin-bottom: 1.5rem;
        }

        h3 {
            margin-top: 1.2rem;
            margin-bottom: 1rem;
        }

        p {
            color: #89898fff;
            line-height: 1.4rem;
            font-size: 0.9rem;
            text-align: center;
        }
    }

    div:nth-child(2) {
        h3 {
            margin-top: 30px;
        }
    }
`;
