import React from "react";

import boostExpoosure from "../../assets/features/desktop/boost-exposure.svg";
import customDomain from "../../assets/features/desktop/custom-domain.svg";
import dragDrop from "../../assets/features/desktop/drag-drop.svg";
import embed from "../../assets/features/desktop/embed.svg";
import heroImage from "../../assets/features/desktop/hero.jpg";
import noLimit from "../../assets/features/desktop/no-limit.svg";
import responsive from "../../assets/features/desktop/responsive.svg";
import Beta from "../../components/Beta";
import { IntroPage } from "../../styles/GlobalStyle";
import { FeaturesContent } from "./styles";

const Features: React.FC = () => {
    return (
        <main>
            <IntroPage>
                <div>
                    <h1>Features</h1>
                    <p>
                        We make sure all of our features are designed to be
                        loved by every aspiring and even professional
                        photograpers who wanted to share their stories.
                    </p>
                </div>

                <div>
                    <img src={heroImage} alt="hero img" />
                </div>
            </IntroPage>

            <FeaturesContent>
                <div>
                    <img src={responsive} alt="feature responsive" />
                    <p>100% Responsive</p>
                    <p>
                        No matter which the device you’re on, our site is fully
                        responsive and stories look beautiful on any screen.
                    </p>
                </div>
                <div>
                    <img src={noLimit} alt="feature no-limit" />
                    <p>No Photo Upload Limit</p>
                    <p>
                        Our tool has no limits on uploads or bandwidth. Freely
                        upload in bulk and share all of your stories in one go.
                    </p>
                </div>
                <div>
                    <img src={embed} alt="feature embed" />
                    <p>Available to Embed</p>
                    <p>
                        Embed Tweets, Facebook posts, Instagram media, Vimeo or
                        YouTube videos, Google Maps, and more.
                    </p>
                </div>
                <div>
                    <img src={customDomain} alt="feature custom domain" />
                    <p>Custom Domain</p>
                    <p>
                        With Photosnap subscriptions you can host your stories
                        on your own domain. You can also remove our branding!
                    </p>
                </div>
                <div>
                    <img src={boostExpoosure} alt="Boost your exposure" />
                    <p>Boost Your Exposure</p>
                    <p>
                        Users that viewed your story or gallery can easily get
                        notifed of new and featured stories with our built in
                        mailing list.
                    </p>
                </div>
                <div>
                    <img src={dragDrop} alt="feature drop img" />
                    <p>Drag &amp; Drop Image</p>
                    <p>
                        Easily drag and drop your image and get beautiful shots
                        everytime. No over the top tooling to add friction to
                        creating stories.
                    </p>
                </div>
            </FeaturesContent>

            <Beta />
        </main>
    );
};

export default Features;
