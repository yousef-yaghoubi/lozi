import type { ComponentProps } from "react";

export type StateType =
  | "topToRight"
  | "topToLeft"
  | "topToBottom"
  | "bottomToRight"
  | "bottomToLeft"
  | "bottomToTop";

export interface PuzzleProps {
  state: StateType;
  size: "lg" | "small" | "mobile";
  text: string;
  icon: string;
  iconFar?: boolean;
  className?: ComponentProps<"div">["className"],
  hovered?: boolean
}

export interface PuzzleFullArray {
  id: number;
  title: string;
  icon: string;
  state: StateType;
}
