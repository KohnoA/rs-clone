import { useState } from 'react';

export type UseInput = [
  {
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  },
  () => void
]

export function useInput(init: string): UseInput {
  const [value, setValue] = useState<string>(init);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const clear = () => setValue('');

  return [ { value, onChange }, clear ];
}