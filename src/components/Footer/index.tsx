import React from "react";
import { Link } from "react-router-dom";

import facebookIcon from "../../assets/shared/desktop/facebook.svg";
import instagramIcon from "../../assets/shared/desktop/instagram.svg";
import logoWhite from "../../assets/shared/desktop/logo-white.svg";
import pinterestIcon from "../../assets/shared/desktop/pinterest.svg";
import twitterIcon from "../../assets/shared/desktop/twitter.svg";
import youtubeIcon from "../../assets/shared/desktop/youtube.svg";
import { MainButton } from "../../styles/GlobalStyle";
import { Container } from "./styles";

const Footer: React.FC = () => {
    return (
        <Container id="footer">
            <div className="socialMedias">
                <img src={logoWhite} alt="Logo" />
                <ul>
                    <li>
                        <a href="#footer">
                            <img src={facebookIcon} alt="facebook icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#footer">
                            <img src={youtubeIcon} alt="youtube icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#footer">
                            <img src={twitterIcon} alt="twitter icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#footer">
                            <img src={pinterestIcon} alt="pinterest icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#footer">
                            <img src={instagramIcon} alt="instagram icon" />
                        </a>
                    </li>
                </ul>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/stories">Stories</Link>
                    </li>
                    <li>
                        <Link to="/features">Features</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <MainButton type="button" className="underlineWhite">
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
                <p>Copyright 2018. All Rights Reserved</p>
            </div>
        </Container>
    );
};

export default Footer;
