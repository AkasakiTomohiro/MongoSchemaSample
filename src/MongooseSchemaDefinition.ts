import { SchemaTypeOpts, Schema, SchemaType } from "mongoose";

type SchemaDefinitionValueType<T = any> =
  | SchemaTypeOpts<T>
  | Schema
  | SchemaType;

export type MongooseSchemaDefinition<T> = {
  readonly [U in keyof T]: T[U] extends (infer R)[]
    ? R extends object
      ? SchemaDefinitionValueType<MongooseSchemaDefinition<R>[]>
      : SchemaDefinitionValueType
    : T[U] extends object
    ? SchemaDefinitionValueType<MongooseSchemaDefinition<T[U]>>
    : SchemaDefinitionValueType;
};
