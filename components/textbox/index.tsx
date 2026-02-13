
type TextboxProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Textbox({ value, onChange }: TextboxProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
