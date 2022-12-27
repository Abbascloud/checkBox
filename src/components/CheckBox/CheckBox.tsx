import { CheckBoxItem } from "./CheckBoxItem/CheckBoxItem";
import { CHECK_BOX_CONST } from "../../const/checkBox.const";
import { CheckBoxProps } from "./checkBox.type";
import classes from "./styles/checkBox.module.css";

export function CheckBox({ toggleSearchParams }: CheckBoxProps) {
  return (
    <fieldset className={classes.checkbox}>
      <legend>выберите варианты:</legend>
      {CHECK_BOX_CONST.map((item) => (
        <CheckBoxItem
          key={item.id}
          icon={item.icon}
          text={item.text}
          id={item.id}
          value={item.value}
          name={item.name}
          toggleSearchParams={toggleSearchParams}
        />
      ))}
    </fieldset>
  );
}
