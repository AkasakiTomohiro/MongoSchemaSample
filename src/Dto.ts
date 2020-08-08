export type CreateDto<T, U extends keyof T> = Required<Pick<T, U>>;
export type UpdateDto<T, U extends keyof T> = Partial<Pick<T, U>>;
