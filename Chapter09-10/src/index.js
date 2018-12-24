import React from "react";
import ReactDOM from "react-dom";

import App from "./App.routing.auth";
import registerServiceWorker from "./registerServiceWorker";

import { log } from "./logging";
log.error("myapp:SERVICE:LOGIN", `Attempt`, { user: "FK", pass: "who?" });
log.error("myapp:FORM:INITIAL", "Doing render");
log.info(
    "myapp:SERVICE:ERROR_STORE",
    "Reporting problem",
    "Something wrong",
    404
);
log.warn("myapp:SERVICE:LOGIN");
log.debug("myapp:SERVICE:INFO", "This won't be logged... low level");
log.info("myapp:SERVICE:GETDATE", "Success", {
    day: 22,
    month: 9,
    year: 60
});
log.verbose("myapp:SERVICE:LOGIN", "Successful login");

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
