import mongoose from "mongoose";
import { TestModel } from "./TestTable/TestModel";
import { ITest } from "./TestTable/ITest";

(async () => {
  mongoose.Promise = global.Promise;
  await mongoose
    .connect("mongodb://localhost/TestDatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      promiseLibrary: require("bluebird"),
    })
    .then(() => console.log("connection successful"));

  const test: ITest = {
    name: "test",
    value: 1,
    stringList: ["C#", "Typescript"],
    objectList: [
      {
        key: "XXXXX",
        value: {
          a: 0,
          b: 0,
        },
      },
    ],
    testEnum: "A",
  };
  const testModel = new TestModel(test);
  const result = await testModel.save();
  console.log(result);
})()
  .then(() => {
    console.log("successful");
  })
  .catch((err: any) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.disconnect();
    console.log("disconnect");
  });
