/* flow() */

import React from "react";
import { storiesOf } from "@storybook/react";

import { CountryFilterBar } from ".";

const countries = [
    { code: "AR", name: "Argentine" },
    { code: "BR", name: "Brazil" },
    { code: "PY", name: "Paraguay" },
    { code: "UY", name: "Uruguay" }
];

storiesOf("Country Filter Bar", module).add("with some countries", () => (
    <CountryFilterBar list={countries} onSelect={() => null} />
));
