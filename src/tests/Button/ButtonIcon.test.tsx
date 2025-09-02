import ButtonIcon from "@components/Button/ButtonIcon";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("ButtonIcon component", () => {
  test("renders children text", () => {
    render(
      <ButtonIcon btn="fill" size="medium">
        Click
      </ButtonIcon>
    );

    const btn = screen.getByRole("button", { name: "Click" });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("Click");
  });

  test("applies correct class for fill and medium", () => {
    render(
      <ButtonIcon btn="fill" size="medium">
        Test
      </ButtonIcon>
    );

    const btn = screen.getByRole("button", { name: "Test" });
    expect(btn.className).toContain("bg-primary"); // کلاس fill
    expect(btn.className).toContain("h-14"); // کلاس medium
    expect(btn.className).toContain("w-14"); // کلاس medium width
  });

  test("applies correct class for stroke and small", () => {
    render(
      <ButtonIcon btn="stroke" size="small">
        Test
      </ButtonIcon>
    );

    const btn = screen.getByRole("button", { name: "Test" });
    expect(btn.className).toContain("border-3"); // کلاس stroke
    expect(btn.className).toContain("h-10"); // کلاس small height
    expect(btn.className).toContain("w-10"); // کلاس small width
  });

  test("applies correct class for text and superSmall", () => {
    render(
      <ButtonIcon btn="text" size="superSmall">
        Test
      </ButtonIcon>
    );

    const btn = screen.getByRole("button", { name: "Test" });
    expect(btn.className).toContain("m-caption-sm-bold"); // کلاس superSmall
    expect(btn.className).toContain("text-primary"); // کلاس text
  });

  test("supports disabled attribute", () => {
    render(
      <ButtonIcon btn="fill" size="medium" disabled>
        Disabled
      </ButtonIcon>
    );

    const btn = screen.getByRole("button", { name: "Disabled" });
    expect(btn).toBeDisabled();
  });
});
