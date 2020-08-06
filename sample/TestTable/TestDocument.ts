import { Document } from "mongoose";
import { ITest } from "./ITest";

export interface ITestDocument extends ITest, Document {}
