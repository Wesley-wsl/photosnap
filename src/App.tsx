import { BrowserRouter } from "react-router-dom";

import { Routers } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
    return (
        <BrowserRouter>
            <Routers />
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
