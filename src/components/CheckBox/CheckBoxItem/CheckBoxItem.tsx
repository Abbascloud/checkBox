import { useState } from "react";
import { CheckBoxItemProps } from "./checkBoxItem.type";
import classes from "./styles/checkBoxItem.module.css";

export function CheckBoxItem({
  id,
  name,
  text,
  value,
  icon,
  toggleSearchParams,
}: CheckBoxItemProps) {
  const [isVisibleIcon, setVisibleIcon] = useState<boolean>(false);
  const clickHeandler = () => {
    if (toggleSearchParams) {
      toggleSearchParams({ [name]: value });
      setVisibleIcon(!isVisibleIcon);
    }
  };
  return (
    <div className={classes.checkbox}>
      <div className={classes.checkbox__wrapper}>
        {isVisibleIcon && (
          <img className={classes.checkbox__icon} src={icon} alt={value} />
        )}
        <input
          className={classes.checkbox__input}
          onClick={clickHeandler}
          type="button"
          id={id}
          name={name}
        ></input>
      </div>
      <label className={classes.checkbox__label} htmlFor={id}>
        {text}
      </label>
    </div>
  );
}
