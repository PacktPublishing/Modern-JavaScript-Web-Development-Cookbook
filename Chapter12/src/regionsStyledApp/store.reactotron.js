/* @flow */

import { AsyncStorage } from "react-native";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reactotron from "../../reactotronConfig";

import { reducer } from "./world.reducer";

export const store = reactotron.createStore(
    reducer,
    applyMiddleware(thunk)
);

(async () => {
    try {
        await AsyncStorage.setItem("First", "Federico");
        await AsyncStorage.setItem("Last", "Kereki");
        await AsyncStorage.setItem("Date", "Sept.22nd");
        await AsyncStorage.getItem("Last");
    } catch (e) {
        // nothing!
    }
})();
