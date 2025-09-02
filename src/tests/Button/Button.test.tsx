import Button from "@components/Button/Button";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("Button component", () => {
  test("renders children text", () => {
    render(
      <Button btn="fill" size="medium">
        Click Me
      </Button>
    );

    const btn = screen.getByRole("button", { name: "Click Me" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("Click Me");
  });

  test("applies correct class for fill and medium", () => {
    render(
      <Button btn="fill" size="medium">
        Test
      </Button>
    );

    const btn = screen.getByRole("button", { name: "Test" });
    expect(btn.className).toContain("bg-primary"); // کلاس fill
    expect(btn.className).toContain("h-14"); // کلاس medium
  });

  test("applies correct class for stroke and small", () => {
    render(
      <Button btn="stroke" size="small">
        Test
      </Button>
    );

    const btn = screen.getByRole("button", { name: "Test" });
    expect(btn.className).toContain("border-3"); // کلاس stroke
    expect(btn.className).toContain("h-10"); // کلاس small
  });

  test("applies correct class for text and superSmall", () => {
    render(
      <Button btn="text" size="superSmall">
        Test
      </Button>
    );

    const btn = screen.getByRole("button", { name: "Test" });
    expect(btn.className).toContain("m-caption-sm-bold"); // کلاس superSmall
    expect(btn.className).toContain("text-primary"); // کلاس text
  });
});
