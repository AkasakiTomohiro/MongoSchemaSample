import { SchemaTypeOpts, Schema, SchemaType } from "mongoose";

type SchemaDefinitionValueType<T = any> =
  | SchemaTypeOpts<T>
  | Schema
  | SchemaType;

export type MongooseSchemaDefinitionType<T> = {
  readonly [U in keyof T]-?: T[U] extends (infer R)[]
    ? R extends object
      ? SchemaDefinitionValueType<MongooseSchemaDefinitionType<R>[]>
      : SchemaDefinitionValueType
    : T[U] extends object
    ? SchemaDefinitionValueType<MongooseSchemaDefinitionType<T[U]>> | SchemaDefinitionValueType
    : SchemaDefinitionValueType;
};

export type MongooseSchemaDefinition<T> = MongooseSchemaDefinitionType<Omit<T, '_id'>>;
