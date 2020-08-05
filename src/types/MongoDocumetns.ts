import { Document } from "mongoose";

export type MongoDocuments<T> = T & Document;
