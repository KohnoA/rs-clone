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
  totalNutrients: ITotalNutrients,
  totalDaily: ITotalNutrients
}

export interface ITotalNutrients {
  FAT: ITotalNutrientsItem,
  FASAT: ITotalNutrientsItem,
  CHOLE: ITotalNutrientsItem,
  NA: ITotalNutrientsItem,
  CHOCDF: ITotalNutrientsItem,
  FIBTG: ITotalNutrientsItem,
  SUGAR: ITotalNutrientsItem,
  PROCNT: ITotalNutrientsItem,
  VITD: ITotalNutrientsItem,
  CA: ITotalNutrientsItem,
  FE: ITotalNutrientsItem,
  K: ITotalNutrientsItem,
  FATRN: ITotalNutrientsItem,
}

export interface ITotalNutrientsItem {
  label: string,
  quantity: number,
  unit: string
}