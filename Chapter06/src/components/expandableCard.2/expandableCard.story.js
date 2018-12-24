import React from "react";
import { storiesOf } from "@storybook/react";

import { ExpandableCard } from "./";

storiesOf("Expandable Card", module)
    .add("with normal contents", () => (
        <ExpandableCard key={229} title={"Normal"}>
            <div>CITIES: 12</div>
            <div>POPULATION: 41956</div>
        </ExpandableCard>
    ))

    .add("with many lines of content", () => (
        <ExpandableCard key={229} title={"Long contents"}>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
            <div>Many, many lines</div>
        </ExpandableCard>
    ))

    .add("with expandable cards inside", () => (
        <ExpandableCard key={229} title={"Outer card"}>
            <ExpandableCard key={1} title={"First inner card"}>
                A single 1
            </ExpandableCard>
            <ExpandableCard key={2} title={"Second inner card"}>
                Some twos <br />2, 2, 2, 2...
            </ExpandableCard>
            <ExpandableCard key={3} title={"Third inner card"}>
                Three threes: 333
            </ExpandableCard>
        </ExpandableCard>
    ));
