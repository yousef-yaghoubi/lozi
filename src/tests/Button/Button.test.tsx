import Button from "@/components/shared/Button/Button";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Button component", () => {
  it("renders children correctly", () => {
    render(
      <Button btn="fill" size="medium">
        Click me
      </Button>
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies correct styles for fill + primary", () => {
    render(
      <Button btn="fill" size="medium" color="primary">
        Primary Fill
      </Button>
    );
    const btn = screen.getByText("Primary Fill");
    expect(btn.className).toContain("bg-primary");
    expect(btn.className).toContain("text-white");
  });

  it("applies correct styles for stroke + primary", () => {
    render(
      <Button btn="stroke" size="small" color="primary">
        Primary Stroke
      </Button>
    );
    const btn = screen.getByText("Primary Stroke");
    expect(btn.className).toContain("border-primary");
    expect(btn.className).toContain("text-primary");
  });

  it("applies correct styles for text + primary", () => {
    render(
      <Button btn="text" size="superSmall" color="primary">
        Primary Text
      </Button>
    );
    const btn = screen.getByText("Primary Text");
    expect(btn.className).toContain("text-primary");
  });

  it("applies correct styles for fill + white", () => {
    render(
      <Button btn="fill" size="large" color="white">
        White Fill
      </Button>
    );
    const btn = screen.getByText("White Fill");
    expect(btn.className).toContain("bg-white");
    expect(btn.className).toContain("text-primary");
  });

  it("applies correct styles for stroke + white", () => {
    render(
      <Button btn="stroke" size="medium" color="white">
        White Stroke
      </Button>
    );
    const btn = screen.getByText("White Stroke");
    expect(btn.className).toContain("border-white");
    expect(btn.className).toContain("text-white");
  });

  it("applies correct styles for text + white", () => {
    render(
      <Button btn="text" size="small" color="white">
        White Text
      </Button>
    );
    const btn = screen.getByText("White Text");
    expect(btn.className).toContain("text-white");
  });

  it("forwards ref to button element", () => {
    const ref = {
      current: null,
    } as unknown as React.RefObject<HTMLButtonElement>;
    render(
      <Button ref={ref} btn="fill" size="medium">
        With Ref
      </Button>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("passes down other props (like disabled)", () => {
    render(
      <Button btn="fill" size="medium" disabled>
        Disabled
      </Button>
    );
    const btn = screen.getByText("Disabled");
    expect(btn).toBeDisabled();
  });
});
