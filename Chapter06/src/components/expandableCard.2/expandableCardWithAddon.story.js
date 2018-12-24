import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs, text, number } from "@storybook/addon-knobs";

import { ExpandableCard } from "./";

storiesOf("Expandable Card (with knobs)", module)
    .addDecorator(withKnobs)
    .add("with normal contents", () => (
        <ExpandableCard key={229} title={text("Card title", "XYZZY")}>
            <div>CITIES: {number("Number of cities", 12)}</div>
            <div>POPULATION: {number("Population", 54321)}</div>
        </ExpandableCard>
    ));
