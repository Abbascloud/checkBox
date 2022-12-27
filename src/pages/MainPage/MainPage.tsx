import { useEffect, useState } from "react";
import { CheckBox, ItemList } from "../../components";
import { getCharacters } from "../../api/getCharacters";
import { BASE_URL } from "../../const/baseURL.const";
import { itemsDataMapper } from "../../mappers/itemsDataMapper";
import { IResponse, SearchParams, NewParam } from "../../types";
import { ItemRenderProps } from "../../components/ItemList/itemList.type";
import classes from "./styles/mainPage.module.css";

export function MainPage() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    name: "",
    status: "",
  });

  function toggleSearchParams(newParam: NewParam): void {
    if (newParam.name) {
      setSearchParams({
        ...searchParams,
        name: searchParams.name ? "" : newParam.name,
      });
    }
    if (newParam.status) {
      setSearchParams({
        ...searchParams,
        status: searchParams.status ? "" : newParam.status,
      });
    }
  }

  const [data, setData] = useState<Array<ItemRenderProps>>();

  useEffect(() => {
    getCharacters<IResponse>(BASE_URL, searchParams).then((data) =>
      setData(itemsDataMapper(data))
    );
  }, [searchParams]);

  return (
    <div className={classes.mainPage}>
      <CheckBox toggleSearchParams={toggleSearchParams} />
      <ItemList items={data} />
    </div>
  );
}
