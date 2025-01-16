import { render as rtlRender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export default async function render(component: React.ReactNode) {
  const user = userEvent.setup();

  return {
    user,
    ...rtlRender(component),
  };
}
