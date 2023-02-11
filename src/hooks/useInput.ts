import { useState, useEffect } from 'react';
import { IUseInput } from '../types/types';
import { EMAIL_REG_EXP, MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH, MIN_NAME_LENGTH, MAX_NAME_LENGTH, Validations } from '../constants/constants';

const useValidation = (value: string, validation: Validations): boolean => {
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    switch (validation) {
      case Validations.email:
        EMAIL_REG_EXP.test(String(value).toLowerCase()) ? setValid(true) : setValid(false);
        break;

      case Validations.password:
        value.length >= MIN_PASSWORD_LENGTH && value.length <= MAX_PASSWORD_LENGTH
          ? setValid(true)
          : setValid(false);
        break;
      
      case Validations.name:
        value.length >= MIN_NAME_LENGTH && value.length <= MAX_NAME_LENGTH
          ? setValid(true)
          : setValid(false);
        break;
    }

  }, [value]);

  return isValid;
}

export const useInput = (init: string, validation: Validations): IUseInput => {
  const [value, setValue] = useState<string>(init);
  const [isDirty, setDirty] = useState<boolean>(false);
  const isValid = useValidation(value, validation);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  const onBlur = () => setDirty(true);

  const clear = () => {
    setDirty(false);
    setValue('');
  };

  return { 
    value,
    isDirty,
    isValid,
    onChange, 
    onBlur, 
    clear
  };
}