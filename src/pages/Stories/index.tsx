import React, { useEffect, useState } from "react";

import Card from "../../components/Card";
import data from "../../services/data";
import { MainButton } from "../../styles/GlobalStyle";
import { StoriesContainer } from "../Home/styles";
import { Intro } from "./styles";

const Stories: React.FC = () => {
    const [stories, setStories] = useState(Array);

    useEffect(() => {
        const listHistory = data.stories;
        setStories(listHistory);
    }, []);
    return (
        <main>
            <Intro>
                <p>last month&apos;s featured story</p>
                <h1>Hazy full moon of appalachi</h1>
                <p>
                    march 2nd w2020 <span>by: John Applesseed</span>
                </p>
                <p>
                    The dissected plateau area, while not actually made up of
                    geological mountains, is popularly called
                    &quot;mountains,&quot; especially in eastern Kentucky and
                    West Virginia, and while the ridges are not high, the
                    terrain is extremely rugged.
                </p>

                <MainButton type="button">
                    READ THE STORY
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
            </Intro>
            <StoriesContainer>
                {stories
                    ? stories.map(data => (
                          <Card data={data} key={Math.random()} />
                      ))
                    : ""}
            </StoriesContainer>
        </main>
    );
};

export default Stories;
