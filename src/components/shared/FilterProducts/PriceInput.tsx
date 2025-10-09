import { formatNumber } from "@/lib/FilterProducts/number";
import Input from "../Input/Input";

interface Props {
  label: string;
  value: number;
  isFocused: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  ariaLabel: string;
}

export default function PriceInput({
  label, value, isFocused, onChange, onFocus, onBlur, ariaLabel,
}: Props) {
  const displayValue = isFocused ? value.toString() : formatNumber(value);

  return (
    <div className="flex items-center gap-4">
      <span>{label}</span>
      <Input
        size="md"
        type="text"
        forPrice
        mainColor="primary"
        value={displayValue}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-label={ariaLabel}
      />
    </div>
  );
}
