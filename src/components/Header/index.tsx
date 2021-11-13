import { Link } from "react-router-dom";

import logo from "../../assets/shared/desktop/logo.svg";
import { Container } from "./styles";

const Header: React.FC = () => {
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

            <button type="button">Get an invite</button>
        </Container>
    );
};

export default Header;
