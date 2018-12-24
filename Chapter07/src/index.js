import React from "react";
import ReactDOM from "react-dom";

import App from "./App.4";
import registerServiceWorker from "./registerServiceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
