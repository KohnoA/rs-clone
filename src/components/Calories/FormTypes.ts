export interface IGender {
  value: string,
  text: string,
  name: string,
}

export interface IGoal {
  value: string,
  text: string,
  name: string,
}

export interface InitialStateRadio {
  gender: string,
  goal: string,
}

export interface IText {
  type: string,
  name: string,
  span: string,
}

export interface InitialStateText {
  age: string,
  height: string,
  weight: string,
}

export type HandleChangeInput = (
  e: React.ChangeEvent<HTMLInputElement>,
) => void;

export type HandleChangeSelect = (
  e: React.ChangeEvent<HTMLSelectElement>,
) => void;

export type IState<T> = [
  state: T,
  stateFn: React.Dispatch<React.SetStateAction<T>>
];

export type RemoveOrCountState = (e: React.MouseEvent<HTMLButtonElement>) => void | number;
export type CountCalories = (weight: string, height: string, age: string, KFA: number) => number;

export interface ICountCalories {
  male: CountCalories,
  female: CountCalories,
}
