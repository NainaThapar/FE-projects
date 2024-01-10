import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement("h1", {}, "Hello World from React js!");


const jsxHeading = <h1>Hello from React</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);