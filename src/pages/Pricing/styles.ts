import styled from "styled-components";

export const InfoPricing = styled.section`
    padding: 2rem;

    div:nth-child(1) {
        width: 13rem;
        margin: 4rem auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div:nth-child(1) > input {
        position: relative;
        width: 4rem;
        height: 2rem;
        -webkit-appearance: none;
        cursor: pointer;
        background: #c6c6c6;
        outline: none;
        border-radius: 20px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        transition: 0.5s;

        &:checked {
            background: #000;
        }

        &:before {
            content: "";
            position: absolute;
            width: 2rem;
            border-radius: 20px;
            height: 2rem;
            top: 0;
            left: 0;
            background: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            transform: scale(1.1);
            transition: 0.3s;
        }

        &:checked:before {
            left: 2rem;
        }
    }

    .info-pricing {
        margin: 0 auto;
        display: flex;
        padding: 2rem;
        height: 33rem;
        gap: 2rem;

        @media (max-width: 1000px) {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 90rem;

            div {
                padding: 2rem;
            }
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 23rem;
            gap: 2rem;

            h2 {
                font-size: 2rem;
            }

            p {
                letter-spacing: 0.02rem;
                line-height: 1.4rem;
            }

            p:nth-child(2) {
                opacity: 0.7;
                text-align: center;
                max-width: 18rem;
            }

            p:nth-child(3) {
                font-size: 2rem;
                font-weight: bold;
                span {
                    display: block;
                    text-align: center;
                    font-size: 1rem;
                    opacity: 0.7;
                    margin-top: 0.5rem;
                }
            }

            button {
                width: 90%;
                padding: 0.7rem;
                background-color: #000;
                color: #fff;
                text-transform: uppercase;
                font-weight: 700;
                letter-spacing: 0.15rem;
                transition: all 0.4s ease-in-out;
                &:hover {
                    background-color: #d9d9d989;
                    border: 0.1rem solid #000;
                    color: #000;
                }
            }
        }

        div:nth-child(2) {
            background-color: black;
            color: #fff;
            position: relative;

            &:before {
                content: "";
                position: absolute;
                top: 0;
                height: 0.5rem;
                width: 100%;
                background: linear-gradient(
                    90deg,
                    #ffc593,
                    #bc7198 25%,
                    #5a77ff 50%
                );
            }

            button {
                background-color: #fff;
                color: #000;
                transition: all 0.4s ease-in-out;
                &:hover {
                    background-color: #d9d9d9d9;
                    border: none;
                }
            }
        }
    }
`;

export const Compare = styled.section`
    max-width: 44rem;
    margin: 8rem auto;

    h2 {
        text-align: center;
        font-size: 2rem;
        margin: 2.5rem auto;
    }

    table {
        letter-spacing: 0.15rem;

        thead {
            border-bottom: 1px solid #000;
            tr {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr 1fr;
                /* gap: 3rem; */
                th {
                    margin-bottom: 1rem;
                }
                th:nth-child(3) {
                    padding-left: 1rem;
                }
                th:nth-child(4) {
                    padding-left: 3rem;
                }
            }
        }

        tbody {
            font-size: 0.8rem;
            tr {
                display: grid;
                grid-template-columns: 2.7fr 1fr 1fr 1fr;
                gap: 4rem;
                align-items: center;
                margin-bottom: 2rem;
                th {
                    text-align: start;
                }

                td {
                    text-align: center;
                    img {
                        margin: 1rem 0;
                    }
                }
                border-bottom: 1px solid #d9d9d9ee;
            }
        }
    }
`;
