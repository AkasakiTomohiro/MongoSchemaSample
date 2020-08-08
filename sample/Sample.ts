import mongoose from "mongoose";
import { TestModel } from "./TestTable/TestModel";
import { TestCreateDto } from "./TestTable/TestDto";

(async () => {
  mongoose.Promise = global.Promise;
  await mongoose
    .connect("mongodb://localhost/TestDatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      promiseLibrary: require("bluebird"),
    })
    .then(() => console.log("connection successful"));

  const test: TestCreateDto = {
    name: "test",
    value: 1,
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
