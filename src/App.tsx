import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routers } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routers />
            <Footer />
            <GlobalStyle />
        </BrowserRouter>
    );
};

export default App;
