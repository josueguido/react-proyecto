import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Memoria from "./componentes/servicios/Memoria";

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
    <React.StrictMode>
        <Memoria>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Memoria>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
