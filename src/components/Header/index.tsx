/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/shared/desktop/logo.svg";
import { Container, MenuMobile } from "./styles";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            <div>
                <Link to="/">
                    <img src={logo} alt="logo photosnap" />
                </Link>
            </div>

            <nav>
                <ul>
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

            <MenuMobile>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`openNav ${
                        isOpen ? "closeIcon" : "defaultIcon"
                    }`}
                >
                    <div />
                    <div />
                </div>
                <nav className={isOpen ? "open" : "exit"}>
                    <ul>
                        <li>
                            <Link to="/stories">Stories</Link>
                        </li>
                        <li>
                            <Link to="/features">Features</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <hr />
                            <button type="button">Get an invite</button>
                        </li>
                    </ul>
                </nav>
            </MenuMobile>

            <button type="button">Get an invite</button>
        </Container>
    );
};

export default Header;
