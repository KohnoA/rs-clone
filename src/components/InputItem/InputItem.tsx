import styles from './InputItem.module.scss';
import { IUseInput } from '../../types/types';
import { useState } from 'react';

interface IInputItemProps {
  input: IUseInput,
  placeholder: string,
  errorMessage: string,
  isPassword?: boolean
}

const InputItem: React.FC<IInputItemProps> = ({ input, placeholder, errorMessage, isPassword = false }) => {
  const [errorInfo, setErrorInfo] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <div className={styles.item}>
      { (input.isDirty && !input.isValid) &&
        <span
          className={ styles.errorInfo  }
          onMouseOver={ () => setErrorInfo(true) }
          onMouseOut={ () => setErrorInfo(false) }
        >
          { errorInfo &&
            <span className={ styles.errorInfo_message }>
              { errorMessage }
            </span>
          }
        </span>
      }

      <input
        type={ (isPassword && !passwordVisible) ? 'password' : 'text' }
        placeholder={ placeholder }
        value={ input.value }
        onChange={ input.onChange }
        onBlur={ input.onBlur }
        className={
          (input.isDirty && !input.isValid)
            ? `${styles.input} ${styles.inputError}`
            : styles.input
        }
      />

      { isPassword && 
        <span
          className={ `${styles.password} ${passwordVisible ? styles.pasVisible : styles.pasUnvisible}` }
          onClick={ () => setPasswordVisible((prev) => !prev) }
        >
        </span>
      }
    </div>
  );
}

export default InputItem;