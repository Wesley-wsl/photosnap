import React from "react";

import { MainButton } from "../../styles/GlobalStyle";
import { Container } from "./styles";

const Beta: React.FC = () => {
    return (
        <Container>
            <h2>
                WE&apos;RE IN BETA. <br /> GET YOUR INVITE <br />
                TODAY!
            </h2>
            <MainButton type="button">
                Get An Invite{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                    <g fill="none" fillRule="evenodd" stroke="#fff">
                        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                </svg>
            </MainButton>
        </Container>
    );
};

export default Beta;
