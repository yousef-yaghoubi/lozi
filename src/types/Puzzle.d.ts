export type StateType =
  | "topToRight"
  | "topToLeft"
  | "topTobottom"
  | "bottomToRight"
  | "bottomToLeft"
  | "bottomToTop";

export interface PuzzleProps {
  state: StateType;
  size: "lg" | "small" | "mobile";
  text: string;
  icon: string;
}

export interface PuzzleFullArray {
    id: number,
    title: string,
    icon: string,
    state: StateType
}