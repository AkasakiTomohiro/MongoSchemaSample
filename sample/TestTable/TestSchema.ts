import mongoose, { Schema } from "mongoose";
import { MongooseSchema } from "../../index";
import { ITest } from "./ITest";
import { ITestDocument } from "./TestDocument";

const schema: MongooseSchema<ITest> = {
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
};

export const TestModel = mongoose.model<ITestDocument>(
  "TestTable",
  new Schema(schema)
);
