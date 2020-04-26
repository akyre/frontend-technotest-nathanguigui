import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import NotFoundPage from "../routes/notfound";
import Header from "./header";
import Calendar from "../routes/calendar";
import ExpertList from "../routes/expertList";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id="app">
            {
                // @ts-ignore
                currentUrl && <Header />
            }
            <Router onChange={handleRoute}>
                <Route path="/" component={Home} />
                <Route path="/calendar/" component={Calendar} />
                <Route path="/experts/" component={ExpertList} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
