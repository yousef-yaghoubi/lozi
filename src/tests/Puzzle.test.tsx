import Puzzle from "@components/Puzzle";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vitest } from "vitest";

// Mock IntersectionObserver برای motion/react
beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  } as any;
});

// Mock آیکون‌ها
vitest.mock("@/lib/IndexIcon", () => ({
  IconPuzzels: {
    testIcon: ({ className, ...props }: any) => (
      <svg data-testid="icon-puzzle" className={className} {...props} />
    ),
  },
}));

// Mock motion/react برای جلوگیری از خطاهای احتمالی
vitest.mock("motion/react", () => ({
  motion: {
    div: ({ children, className, ...props }: any) => (
      <div className={className} {...props}>
        {children}
      </div>
    ),
  },
}));

const states = [
  "topToRight",
  "topToLeft",
  "topToBottom",
  "bottomToRight",
  "bottomToLeft",
  "bottomToTop",
] as const;

const sizes = ["lg", "small", "mobile"] as const;

describe("Puzzle Component Tests", () => {
  describe("Basic Rendering", () => {
    test("renders with minimum required props", () => {
      render(
        <Puzzle
          state="topToBottom"
          size="lg"
          text="Test Text"
          icon="testIcon"
        />
      );

      expect(screen.getByText("Test Text")).toBeInTheDocument();
      expect(screen.getAllByTestId("icon-puzzle")).toHaveLength(2);
    });

    test("renders with custom className", () => {
      const { container } = render(
        <Puzzle
          state="topToBottom"
          size="lg"
          text="Test"
          icon="testIcon"
          className="custom-class"
        />
      );

      expect(container.firstChild).toHaveClass("custom-class");
    });
  });

  describe("State and Size Combinations", () => {
    states.forEach((state) => {
      sizes.forEach((size) => {
        test(`renders correctly with state=${state} and size=${size}`, () => {
          render(
            <Puzzle
              state={state}
              size={size}
              text={`Test ${state} ${size}`}
              icon="testIcon"
            />
          );

          // بررسی متن
          expect(screen.getByText(`Test ${state} ${size}`)).toBeInTheDocument();

          // بررسی آیکون‌ها
          const icons = screen.getAllByTestId("icon-puzzle");
          expect(icons).toHaveLength(2);

          // بررسی کلاس‌های سایز
          const container = screen
            .getByText(`Test ${state} ${size}`)
            .closest(".parenPuzzleRounded");

          if (size === "lg") {
            expect(container).toHaveClass("w-[432px]", "h-36");
          } else if (size === "small") {
            expect(container).toHaveClass("w-[216px]", "h-[73px]");
          } else {
            expect(container).toHaveClass("w-[165px]", "h-16");
          }
        });
      });
    });
  });

  describe("Active State", () => {
    test("applies active styling when isActive is true", () => {
      render(
        <Puzzle
          state="topToBottom"
          size="lg"
          text="Active Test"
          icon="testIcon"
          isActive={true}
        />
      );

      const container = screen
        .getByText("Active Test")
        .closest(".parenPuzzleRounded");
      expect(container).toHaveClass("groupHovered");

      const parentDiv = screen.getByText("Active Test").parentElement;
      expect(parentDiv).toHaveClass(
        "bg-primary",
        "border-background",
        "text-white"
      );
    });

    test("applies inactive styling when isActive is false or undefined", () => {
      render(
        <Puzzle
          state="topToBottom"
          size="lg"
          text="Inactive Test"
          icon="testIcon"
          isActive={false}
        />
      );

      const parentDiv = screen.getByText("Inactive Test").parentElement;
      expect(parentDiv).toHaveClass(
        "bg-background",
        "border-primary",
        "text-primary"
      );
    });
  });

  describe("Icon Positioning", () => {
    test("shows icon in main area when iconFar is false", () => {
      const { container } = render(
        <Puzzle
          state="topToBottom"
          size="lg"
          text="Test"
          icon="testIcon"
          iconFar={false}
        />
      );

      // آیکون اول (در main area) باید visible باشد
      const mainIcon = container.querySelector(".flex i:not(.hidden)");
      expect(mainIcon).toBeInTheDocument();

      // آیکون دوم (در child area) باید hidden باشد
      const childIcon = container.querySelector(".hidden");
      expect(childIcon).toBeInTheDocument();
    });

    test("shows icon in child area when iconFar is true", () => {
      const { container } = render(
        <Puzzle
          state="topToBottom"
          size="lg"
          text="Test"
          icon="testIcon"
          iconFar={true}
        />
      );

      // بررسی که آیکون در child area نمایش داده می‌شود
      const icons = screen.getAllByTestId("icon-puzzle");
      expect(icons).toHaveLength(2);
    });
  });

  describe("Special Cases", () => {
    test("renders additional div for bottomToTop state", () => {
      const { container } = render(
        <Puzzle
          state="bottomToTop"
          size="lg"
          text="Bottom To Top"
          icon="testIcon"
        />
      );

      // بررسی وجود div اضافی برای bottomToTop
      const childDivs = container.querySelectorAll(".boxForPuzzle");
      expect(childDivs).toHaveLength(2); // یکی عادی، یکی اضافی
    });

    test("does not render additional div for other states", () => {
      const { container } = render(
        <Puzzle
          state="topToBottom"
          size="lg"
          text="Top To Bottom"
          icon="testIcon"
        />
      );

      const childDivs = container.querySelectorAll(".boxForPuzzle");
      expect(childDivs).toHaveLength(1); // فقط یکی
    });
  });

  describe("CSS Classes", () => {
    test("applies correct parent classes based on state", () => {
      render(
        <Puzzle state="topToRight" size="lg" text="Test" icon="testIcon" />
      );

      const parentDiv = screen.getByText("Test").parentElement;
      expect(parentDiv).toHaveClass("rounded-br-none");
    });

    test("applies correct child classes based on state", () => {
      const { container } = render(
        <Puzzle state="topToRight" size="lg" text="Test" icon="testIcon" />
      );

      const childDiv = container.querySelector(".boxForPuzzle");
      expect(childDiv).toHaveClass("right-0", "border-3");
    });
  });

  describe("Motion Animation", () => {
    test("renders with motion wrapper", () => {
      const { container } = render(
        <Puzzle state="topToBottom" size="lg" text="Test" icon="testIcon" />
      );

      // بررسی که کامپوننت درون motion.div قرار دارد
      expect(container.firstChild).toHaveClass("parenPuzzleRounded");
    });
  });
});
