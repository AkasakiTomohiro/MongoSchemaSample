import { SchemaTypeOpts, Schema, SchemaType } from "mongoose";

type SchemaDefinition<T = any> = SchemaTypeOpts<T> | Schema | SchemaType;

export type MongooseSchema<T> = {
  readonly [U in keyof T]: T[U] extends (infer R)[]
    ? R extends object
      ? SchemaDefinition<MongooseSchema<R>[]>
      : SchemaDefinition
    : T[U] extends object
    ? SchemaDefinition<MongooseSchema<T[U]>>
    : SchemaDefinition;
};
