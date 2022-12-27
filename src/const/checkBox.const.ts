import { alive, rick } from "../assets";
import { CheckBoxItemProps } from "../components/CheckBox/CheckBoxItem/checkBoxItem.type";

export const CHECK_BOX_CONST: Array<CheckBoxItemProps> = [
  { name: "name", id: "name", text: "Rick Sanchez", icon: rick, value: "rick" },
  { name: "status", id: "status", text: "Alive", icon: alive, value: "alive" },
];
