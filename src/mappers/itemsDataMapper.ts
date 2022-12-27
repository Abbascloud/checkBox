import { ItemRenderProps } from "../components/ItemList/itemList.type";
import { IResponse } from "../types/response.type";

export function itemsDataMapper(response: IResponse): Array<ItemRenderProps> {
  return response.results.map((responseItem) => {
    return {
      name: responseItem.name,
      id: responseItem.id,
      status: responseItem.status,
    };
  });
}
