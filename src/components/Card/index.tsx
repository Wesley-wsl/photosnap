import React from "react";

import { ICardProps } from "../../@types";
import { MainButton } from "../../styles/GlobalStyle";
import { Container } from "./styles";

const Card: React.FC<ICardProps> = ({
    data: { title, author, background },
}) => {
    return (
        <Container background={background}>
            <article>
                <p>{title}</p>
                <p>by {author}</p>
                <MainButton type="button">
                    READ STORY{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="14"
                    >
                        <g fill="none" fillRule="evenodd" stroke="#fff">
                            <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                        </g>
                    </svg>
                </MainButton>
            </article>
        </Container>
    );
};

export default Card;
