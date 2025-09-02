// src/tests/Navbar.test.tsx
import Navbar from "@components/Navbar/Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock @tanstack/react-router
vi.mock("@tanstack/react-router", async (importOriginal) => {
  const actual = (await importOriginal()) as any;
  return {
    ...actual,
    useLocation: vi.fn(() => ({ pathname: "/" })),
    Link: ({ children, to }: any) => <a href={to}>{children}</a>,
  };
});

// Mock useDarkMode store
vi.mock("@/store/useDarkMode", () => ({
  useDarkMode: vi.fn(),
}));

import { useDarkMode } from "@/store/useDarkMode";

describe("Navbar", () => {
  beforeEach(() => {
    (useDarkMode as any).mockReturnValue({
      darkMode: false,
      toggleMode: vi.fn(),
    });
  });

  it("renders logos and buttons", () => {
    render(<Navbar />);
    expect(screen.getAllByAltText("logo").length).toBe(2);
    expect(screen.getAllByRole("button").length).toBeGreaterThan(0);
  });

  it("toggles dark mode on button click", () => {
    const toggleModeMock = vi.fn();
    (useDarkMode as any).mockReturnValue({
      darkMode: false,
      toggleMode: toggleModeMock,
    });

    render(<Navbar />);
    const darkModeButton = screen.getAllByRole("button")[1]; // assume second button is dark mode
    fireEvent.click(darkModeButton);
    expect(toggleModeMock).toHaveBeenCalled();
  });

  it("opens and closes mobile menu", () => {
    render(<Navbar />);
    const menuButton = screen.getAllByRole("button")[0]; // assume first button is menu
    fireEvent.click(menuButton);
    const menuDiv = screen.getByTestId("mobile-menu");
    expect(menuDiv).toHaveClass("flex");
    fireEvent.click(menuButton);
    expect(menuDiv).toHaveClass("max-h-0");
  });
});
