export const TestEnumList = ["A", "B", "C"] as const;
export type TestEnum = typeof TestEnumList[number];
