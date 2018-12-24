import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import { CountryFilterBar } from "./";
import markDownText from "./countryFilterBar.md";

const countries = [
    { code: "AR", name: "Argentine" },
    { code: "BR", name: "Brazil" },
    { code: "PY", name: "Paraguay" },
    { code: "UY", name: "Uruguay" }
];

storiesOf("Country Filter Bar (with addons)", module).add(
    "with some countries - with actions and notes",
    withNotes(markDownText)(() => (
        <CountryFilterBar
            list={countries}
            onSelect={action("change:country")}
        />
    ))
);
