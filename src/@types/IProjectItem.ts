import { IItem } from "./IItem";

export interface IProjectItem {
  name: string;
  width: number;
  height: number;
  items: IItem[];
}
