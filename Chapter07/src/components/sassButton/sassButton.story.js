/* @flow */

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { SassButton } from "./";

storiesOf("SASS buttons", module)
    .add("normal style", () => (
        <SassButton
            normal
            buttonText={"A normal SASSy button!"}
            onSelect={action("click:normal")}
        />
    ))
    .add("alert style", () => (
        <SassButton
            normal={false}
            buttonText={"An alert SASSy button!"}
            onSelect={action("click:alert")}
        />
    ));
