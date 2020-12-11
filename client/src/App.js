import {Navbar} from "./components/Navbar";
import React from "react";
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";

function App() {
    const routes = useRoutes();

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                {routes}
            </div>
        </BrowserRouter>
    );
}

export default App;
