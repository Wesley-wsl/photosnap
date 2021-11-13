import React, { useEffect, useState } from "react";

import embed from "../../assets/features/desktop/embed.svg";
import noLimit from "../../assets/features/desktop/no-limit.svg";
import responsive from "../../assets/features/desktop/responsive.svg";
import beautifulStories from "../../assets/home/desktop/beautiful-stories.jpg";
import createAndShare from "../../assets/home/desktop/create-and-share.jpg";
import designedForEveryone from "../../assets/home/desktop/designed-for-everyone.jpg";
import Card from "../../components/Card";
import data from "../../services/data";
import { MainButton } from "../../styles/GlobalStyle";
import {
    AboutPhotosnap,
    Container,
    Features,
    Intro,
    StoriesContainer,
} from "./styles";

const Home: React.FC = () => {
    const [stories, setStories] = useState(Array);

    useEffect(() => {
        const listHistory = data.stories.slice(0, 4);
        setStories(listHistory);
    }, []);

    return (
        <Container>
            <AboutPhotosnap>
                <Intro>
                    <h1>Create and share your photo stories.</h1>
                    <p>
                        Photosnap is a platform for photographers and visual
                        storytellers. We make it easy to share photos, tell
                        stories and connect with others.
                    </p>

                    <MainButton type="button">
                        Get An Invite{" "}
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
                <div className="photography">
                    <img src={createAndShare} alt="Photographer" />
                </div>
            </AboutPhotosnap>

            <AboutPhotosnap>
                <div className="photography">
                    <img src={beautifulStories} alt="Notebook design" />
                </div>
                <Intro>
                    <h1>Beautiful stories every time</h1>
                    <p>
                        We provide design templates to ensure your stories look
                        terrific. Easily add photos, text, embed maps and media
                        from other networks. Then share your story with everyone
                    </p>

                    <MainButton type="button" className="underlineWhite">
                        View the stories{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="43"
                            height="14"
                        >
                            <g fill="none" fillRule="evenodd" stroke="#000">
                                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                            </g>
                        </svg>
                    </MainButton>
                </Intro>
            </AboutPhotosnap>

            <AboutPhotosnap>
                <Intro>
                    <h1>Designed for Everyone</h1>
                    <p>
                        Photosnap can help you create stories that resonate with
                        your audience. Our tool is designed for photographers of
                        all levels, brands, businesses you name it.
                    </p>

                    <MainButton type="button" className="underlineWhite">
                        View The Stories{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="43"
                            height="14"
                        >
                            <g fill="none" fillRule="evenodd" stroke="#000">
                                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                            </g>
                        </svg>
                    </MainButton>
                </Intro>
                <div className="photography">
                    <img src={designedForEveryone} alt="Photographer" />
                </div>
            </AboutPhotosnap>

            <StoriesContainer>
                {stories
                    ? stories.map(data => (
                          <Card data={data} key={Math.random()} />
                      ))
                    : ""}
            </StoriesContainer>

            <Features>
                <div>
                    <img src={responsive} alt="feature responsive" />
                    <h3>100% Responsive</h3>
                    <p>
                        No matter which the device you&apos;re on, our site is
                        fully responsive and stories look beautiful on any
                        screen.
                    </p>
                </div>
                <div>
                    <img src={noLimit} alt="feature no-limit" />
                    <h3>No Photo Upload Limit</h3>
                    <p>
                        Our tool has no limits on uploads or bandwidth. Freely
                        upload in bulk and share all of your stories in one go.
                    </p>
                </div>
                <div>
                    <img src={embed} alt="Available to embed" />
                    <h3>Available to Embed</h3>
                    <p>
                        Embed Tweets, Facebook posts, Instagram media, Vimeo or
                        YouTube videos, Google Maps, and more.
                    </p>
                </div>
            </Features>
        </Container>
    );
};

export default Home;
