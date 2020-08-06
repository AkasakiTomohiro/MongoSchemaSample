import { TestEnum } from "./TestEnum";

export interface ITest {
  name: string;
  value: number;
  stringList: string[];
  objectList: { key: string; value: { a: number; b: number } }[];
  testEnum: TestEnum;
}
