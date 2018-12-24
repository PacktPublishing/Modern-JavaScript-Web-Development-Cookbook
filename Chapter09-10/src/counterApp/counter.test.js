import React from "react";
import TestRenderer from "react-test-renderer";

import { Counter } from "./counter.component";

describe("clicksDisplay", () => {
    it("renders correctly", () => {
        const tree = TestRenderer.create(
            <Counter count={9} dispatch={() => null} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
