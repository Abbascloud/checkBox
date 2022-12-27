import { ItemProps } from "./item.type";
export function Item({ name, status }: ItemProps) {
  return (
    <li>
      name:{name}, status:{status}
    </li>
  );
}
