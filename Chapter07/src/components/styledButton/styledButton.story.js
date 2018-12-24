/* @flow */

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { StyledButton } from "./";

storiesOf("Styled-Components buttons", module)
    .add("normal style", () => (
        <StyledButton
            normal
            buttonText={"A normal Styled-Components button!"}
            onSelect={action("click:normal")}
        />
    ))
    .add("alert style", () => (
        <StyledButton
            normal={false}
            buttonText={"An alert Styled-Components button!"}
            onSelect={action("click:alert")}
        />
    ));
