import styled from "styled-components";

import { IBackground } from "../../@types";

export const Container = styled.div`
    width: 25%;
    height: 28rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.3s;

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
        background: linear-gradient(45deg, #ffc593, #bc7198 25%, #5a77ff 50%);
    }

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.66) 0, transparent);
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

    background-image: url(${({ background }: IBackground) => background});
`;
