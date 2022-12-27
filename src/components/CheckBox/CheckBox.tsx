import { CheckBoxItem } from "./CheckBoxItem/CheckBoxItem";
import { CHECK_BOX_CONST } from "../../const/checkBox.const";
import { CheckBoxProps } from "./checkBox.type";

export function CheckBox({ toggleSearchParams }: CheckBoxProps) {
  return (
    <fieldset>
      <legend>выберите варианты:</legend>
      {CHECK_BOX_CONST.map((item) => (
        <CheckBoxItem
          key={item.id}
          value={item.value}
          text={item.text}
          id={item.id}
          name={item.name}
        />
      ))}
    </fieldset>
  );
}
