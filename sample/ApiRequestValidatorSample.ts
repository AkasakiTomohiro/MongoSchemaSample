import { ApiRequestValidator } from "../src/ApiRequestValidator";
import { TestCreateDto, TestUpdateDto } from "./TestTable/TestDto";
import { TestEnumList } from "./TestTable/TestEnum";

const createSchema: ApiRequestValidator<TestCreateDto> = {
  name: {
    type: "string",
    required: true,
    regExp: /.{1,10}/,
  },
  value: {
    type: "number",
    required: true,
    min: 0,
    max: 10,
  },
  testEnum: {
    type: "enum",
    required: true,
    list: TestEnumList,
  },
};

const updateSchema: ApiRequestValidator<TestUpdateDto> = {
  value: {
    type: "number",
    required: false,
    min: 0,
    max: 10,
  },
  testEnum: {
    type: "enum",
    required: false,
    list: TestEnumList,
  },
  stringList: {
    type: "array",
    required: false,
    validatorTypeObject: false,
    validator: {
      type: "string",
    },
  },
  objectList: {
    type: "array",
    required: false,
    validatorTypeObject: true,
    validator: {
      key: {
        type: "string",
        required: true,
        regExp: /.{1,10}/,
      },
      value: {
        type: "object",
        required: true,
        validator: {
          a: {
            type: "number",
            required: true,
          },
          b: {
            type: "number",
            required: true,
          },
        },
      },
    },
  },
};
