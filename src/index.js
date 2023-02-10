import React from "react";
import ReactDOM from "react-dom/client";
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import "./index.css";
import {setUpStore} from "./redux";
import {App} from "./App";
import {history} from "./utils";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setUpStore();

root.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App/>
        </BrowserRouter>
    </Provider>
);
