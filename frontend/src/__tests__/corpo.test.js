import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CorpoCeleste from "../components/CorpoCeleste/CorpoCeleste";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it("renders with name", () => {
  act(() => {
    render(<CorpoCeleste name="Jupiter" />, container);
  });
  expect(container.textContent).toBe("Jupiter");
});
