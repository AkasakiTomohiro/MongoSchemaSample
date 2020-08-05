import { SchemaTypeOpts, Schema, SchemaType } from "mongoose";

type MongoArraySchema<T> = {
  [U in keyof T]: T;
};

export type MongoSchema<T> = {
  [U in keyof T]: T[U] extends (infer R)[]
    ? SchemaTypeOpts<R> | Schema<R> | SchemaType
    : T[U] extends object
    ? MongoSchema<T[U]>
    : SchemaTypeOpts<any> | Schema | SchemaType;
};
