import { Item } from "./Item";
import { ItemRenderProps } from "./itemList.type";
import classes from "./styles/itemList.module.css";

export function ItemList({
  items,
}: {
  items: Array<ItemRenderProps> | undefined;
}) {
  return (
    <>
      {items && (
        <ul className={classes.itemList}>
          {items.map((item) => {
            return <Item key={item.id} name={item.name} status={item.status} />;
          })}
        </ul>
      )}
    </>
  );
}
