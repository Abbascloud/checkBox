import { ItemProps } from "./item.type";
import classes from "./styles/item.module.css";

export function Item({ name, status }: ItemProps) {
  return (
    <li className={classes.item}>
      <span>name:</span> {name},<span>status:</span> {status}
    </li>
  );
}
