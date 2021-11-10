import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";

export const Routers: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </>
    );
};
