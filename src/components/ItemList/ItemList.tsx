import { Item } from "./Item";
import { ItemRenderProps } from "./itemList.type";

export function ItemList({
  items,
}: {
  items: Array<ItemRenderProps> | undefined;
}) {
  return (
    <>
      {items && (
        <ul>
          {items.map((item) => {
            return <Item key={item.id} name={item.name} status={item.status} />;
          })}
        </ul>
      )}
    </>
  );
}
