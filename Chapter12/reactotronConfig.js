/* @flow */

import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron.configure({
    port: 9090,
    host: "192.168.1.200"
})
    .useReactNative({
        networking: {
            ignoreUrls: /\/logs$/
        }
    })
    .use(
        reactotronRedux({
            isActionImportant: action => action.type.includes("success")
        })
    )
    .connect();

Reactotron.log("A knick-knack is a thing that sits on top of a whatnot");
Reactotron.warn("If you must make a noise, make it quietly");
Reactotron.error("Another nice mess you've gotten me into.");

export default reactotron;
