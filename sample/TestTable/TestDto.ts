import { ITest } from "./ITest";
import { CreateDto, UpdateDto } from "../../src/Dto";

export type TestCreateDto = CreateDto<ITest, "name" | "value" | "testEnum">;
export type TestUpdateDto = UpdateDto<
  ITest,
  "value" | "testEnum" | "stringList" | "objectList"
>;
