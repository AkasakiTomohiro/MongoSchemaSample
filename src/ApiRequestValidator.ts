interface StringRequestValidator {
  readonly type: "string";
  readonly required: boolean;
  readonly regExp: RegExp;
}

interface NumberRequestValidator {
  readonly type: "number";
  readonly required: boolean;
  readonly min?: number;
  readonly max?: number;
}

interface BooleanRequestValidator {
  readonly type: "boolean";
  readonly required: boolean;
}

interface ObjectRequestValidator<T> {
  readonly type: "object";
  readonly required: boolean;
  readonly validator: T;
}

interface ArrayRequestValidator<T> {
  readonly type: "array";
  readonly required: boolean;
  readonly minLength?: number;
  readonly maxLength?: number;
  readonly validator: T;
  readonly validatorTypeObject: boolean;
}

interface EnumRequestValidator {
  readonly type: "enum";
  readonly required: boolean;
  readonly list: readonly (string | number)[];
}

type RequestValidator<T = any> =
  | StringRequestValidator
  | NumberRequestValidator
  | BooleanRequestValidator
  | EnumRequestValidator
  | ObjectRequestValidator<T>
  | ArrayRequestValidator<T>;

export type ApiRequestValidator<T> = {
  readonly [U in keyof T]-?: T[U] extends (infer R)[]
    ? R extends object
      ? RequestValidator<ApiRequestValidator<R>>
      : RequestValidator
    : T[U] extends object
    ? RequestValidator<ApiRequestValidator<T[U]>>
    : RequestValidator;
};
