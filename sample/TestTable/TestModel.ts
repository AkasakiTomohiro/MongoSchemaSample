import mongoose, { Schema } from "mongoose";
import { MongooseSchema } from "../../src/MongooseSchema";
import { ITest } from "./ITest";
import { ITestDocument } from "./TestDocument";
import { TestEnumList } from "./TestEnum";

const testSchema: MongooseSchema<ITest> = {
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  value: {
    type: Number,
    min: 0,
    max: 10,
  },
  stringList: {
    type: [{ type: String, required: true }],
    default: [],
  },
  objectList: {
    type: [
      {
        key: String,
        value: {
          type: {
            a: { type: Number },
            b: { type: Number },
          },
        },
      },
    ],
    default: [],
  },
  testEnum: {
    type: String,
    enum: TestEnumList,
    required: true,
  },
};

export const TestModel = mongoose.model<ITestDocument>(
  "TestTable",
  new Schema(testSchema)
);
