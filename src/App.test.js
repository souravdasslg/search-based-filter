import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Match Snapshot For Initial Rendering", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
