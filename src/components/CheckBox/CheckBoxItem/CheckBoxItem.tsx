import { CheckBoxItemProps } from "./checkBox.type";

export function CheckBoxItem({ id, name, text, value }: CheckBoxItemProps) {
  return (
    <>
      <input type="button" value={value} id={id} name={name} />
      <label htmlFor={id}>{text}</label>
    </>
  );
}
