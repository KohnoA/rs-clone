import { ModalContent } from "../constants/constants";

export interface IUseInput {
  value: string,
  isValid: boolean,
  isDirty: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onBlur: () => void,
  clear: () => void
}

export interface IModalContext {
  isOpen: boolean,
  content: ModalContent | null,
}

export interface IUserState {
  email: string | null,
  token: string | null,
  id: string | null,
  name: string | null,
}

export interface INutritionFactsData {
  calories: number,
}