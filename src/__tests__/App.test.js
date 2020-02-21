import React from "react";
import { render } from "@testing-library/react";

import App from "../App";

test("App", () => {
  const wrapper = render(<App />);

  // stuff should be in the screen
  // clicking a story should open the post page
  // post page should display comments and links
  // comments must be collapsable

  wrapper.debug();
});
