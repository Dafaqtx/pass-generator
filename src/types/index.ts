export type Fields = 'lowerCaseAlphabet' | 'upperCaseAlphabet' | 'numbers' | 'symbols';
export type Rules = Record<Fields, boolean>;

export enum StrengthEnum {
  'TOO WEAK!' = 1,
  'WEAK' = 2,
  'MEDIUM' = 3,
  'STRONG' = 4,
}
