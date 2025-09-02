import PublicBanner from "@components/Banners/PublicBanner";
import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test } from "vitest";


beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
});

describe("PublicBanner component", () => {
  const title = "بنر تستی";
  const desc = "توضیحات تستی برای PublicBanner";
  const srcImage = "/images/testImage.jpg";

  test("renders title and description", () => {
    render(
      <PublicBanner title={title} desc={desc} srcImage={srcImage}>
        <div>Child content</div>
      </PublicBanner>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(desc)).toBeInTheDocument();
  });

  test("renders image with correct alt", () => {
    render(
      <PublicBanner title={title} desc={desc} srcImage={srcImage}>
        <div>Child content</div>
      </PublicBanner>
    );

    const img = screen.getByAltText("home page");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", srcImage);
  });

  test("renders children", () => {
    render(
      <PublicBanner title={title} desc={desc} srcImage={srcImage}>
        <div data-testid="child">Child content</div>
      </PublicBanner>
    );

    const child = screen.getByTestId("child");
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("Child content");
  });
});
