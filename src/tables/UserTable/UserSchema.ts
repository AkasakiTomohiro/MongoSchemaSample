import { Schema } from "mongoose";
import { MongoSchema } from "../../types/MongoSchema";
import { IUser } from "./IUser";

const schema: MongoSchema<IUser> = {
  name: {
    type: String,
    required: true,
    unique: true,
    maxLength: 256,
    minLength: 5,
  },
  age: {
    type: Number,
    required: true,
  },
  list: {
    type: [
      {
        key: { type: String },
      },
    ],
    required: true,
    unique: true,
    maxLength: 256,
    minLength: 5,
  },
};

export const UserSchema = new Schema(schema);
