import TitleHead from "@components/TitleHead";
import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test } from "vitest";
// Mock برای IntersectionObserver
beforeAll(() => {
  class IntersectionObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  // @ts-ignore
  global.IntersectionObserver = IntersectionObserverMock;
});

describe("TitleHead component", () => {
  const headerText = "سلام";
  const descText = "توضیحات نمونه";

  test("renders header and description", () => {
    render(<TitleHead header={headerText} desc={descText} />);
    expect(screen.getByText(headerText)).toBeInTheDocument();
    expect(screen.getByText(descText)).toBeInTheDocument();
  });

  test("renders icon", () => {
    render(<TitleHead header={headerText} desc={descText} />);
    const icon = screen.getByTestId("icon-lozi-head");
    expect(icon).toBeInTheDocument();
  });
});
