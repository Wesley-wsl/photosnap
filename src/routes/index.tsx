import { Switch, Route } from "react-router-dom";

import Features from "../pages/Features";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import Stories from "../pages/Stories";

export const Routers: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/stories" exact component={Stories} />
                <Route path="/features" exact component={Features} />
                <Route path="/pricing" exact component={Pricing} />
            </Switch>
        </>
    );
};
