/* @flow */

import { createDrawerNavigator } from "react-navigation";

import {
    Home,
    Alpha,
    Bravo,
    Charlie,
    Zulu,
    Help,
    SomeJumps
} from "./screens";

export const MyDrawer = createDrawerNavigator(
    {
        Home: { screen: Home },
        Alpha: { screen: Alpha },
        Bravo: { screen: Bravo },
        Charlie: { screen: Charlie },
        Zulu: { screen: Zulu },
        ["Get Help"]: { screen: Help },
        ["Some jumps"]: { screen: SomeJumps }
    },
    {
        drawerBackgroundColor: "lightcyan",
        drawerWidth: 140
    }
);
