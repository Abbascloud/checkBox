import { NewParam } from "../../../types";

export type CheckBoxItemProps = {
  id: string;
  name: string;
  text: string;
  icon: string;
  value: string;
  toggleSearchParams?: (newParam: NewParam) => void;
};
