import { useInput } from '../../hooks/useInput';
import { Validations } from '../../constants/constants';
import styles from './userForms.module.scss';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';

interface SignUpProp {
  changeForm: () => void
}

const SignUp: React.FC<SignUpProp> = ({ changeForm }: SignUpProp) => {
  const name = useInput('', Validations.name);
  const email = useInput('', Validations.email);
  const password = useInput('', Validations.password);
  const confirmPassword = useInput('', Validations.password);
  const [nameInfo, setNameInfo] = useState<boolean>(false);
  const [emailInfo, setEmailInfo] = useState<boolean>(false);
  const [passwordInfo, setPasswordInfo] = useState<boolean>(false);
  const [confirmPasswordInfo, setConfirmPasswordInfo] = useState<boolean>(false);
  const [passwordsMatchError, setPasswordsMatchError] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);

  useEffect(() => {
    if (
      (confirmPassword.isDirty && !confirmPassword.isValid) || 
      password.value !== confirmPassword.value
    ) setPasswordsMatchError(true);
    else setPasswordsMatchError(false);
    
  }, [confirmPassword.value, password.value, confirmPassword.isDirty, confirmPassword.isValid]);
  

  const signUpHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email.isValid || !password.isValid) return;

    console.log(`name - ${name.value}`);
    console.log(`email - ${email.value}`);
    console.log(`password - ${password.value}`);
    console.log(`confirmPassword - ${confirmPassword.value}`);

    name.clear();
    email.clear();
    password.clear();
    confirmPassword.clear();
  }

  const changeFormHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    changeForm();
  }

  return (
    <form action="#" className={ styles.userForm } onSubmit={ signUpHandler }>

      <div className={ styles.userForm__item }>
        { (name.isDirty && !name.isValid) && 
          <span 
            className={ styles.userForm__errorInfo  } 
            onMouseOver={ () => setNameInfo(true) }
            onMouseOut={ () => setNameInfo(false) }
          >
            { nameInfo &&
              <span 
                className={ styles.userForm__errorInfo_message }
              >
                The name must be at least 3 and not more than 16 characters!
              </span>
            }
          </span>
        }
        <input 
          type="text"
          placeholder='Your Name'
          value={ name.value }
          onChange={ name.onChange }
          onBlur={ name.onBlur }
          className={ 
            (name.isDirty && !name.isValid)
              ? `${styles.userForm__input} ${styles.userForm__inputError}`
              : styles.userForm__input 
          }
        />
      </div>

      <div className={styles.userForm__item}>
        { (email.isDirty && !email.isValid) && 
          <span 
            className={ styles.userForm__errorInfo  } 
            onMouseOver={ () => setEmailInfo(true) }
            onMouseOut={ () => setEmailInfo(false) }
          >
            { emailInfo &&
              <span 
                className={ styles.userForm__errorInfo_message }
              >
                The email address must contain the &ldquo;@&ldquo; symbol. &ldquo;{email.value}&ldquo; address is missing &ldquo;@&ldquo; character.
              </span>
            }
          </span>
        }
        <input 
          type="email"
          placeholder='E-mail'
          value={ email.value }
          onChange={ email.onChange }
          onBlur={ email.onBlur }
          className={ 
            (email.isDirty && !email.isValid)
              ? `${styles.userForm__input} ${styles.userForm__inputError}`
              : styles.userForm__input 
          }
        />
      </div>

      <div className={ styles.userForm__item }>
        { (password.isDirty && !password.isValid) && 
          <span 
          className={ styles.userForm__errorInfo  } 
          onMouseOver={ () => setPasswordInfo(true) }
          onMouseOut={ () => setPasswordInfo(false) }
          >
            { passwordInfo &&
              <span 
                className={ styles.userForm__errorInfo_message }
              >
                The name must be at least 4 and not more than 15 characters!
              </span>
            }
          </span>
        }
        <input 
          type={ passwordVisible ? 'text' : 'password' }
          placeholder='Password'
          value={ password.value }
          onChange={ password.onChange }
          onBlur={ password.onBlur }
          className={ 
            (password.isDirty && !password.isValid)
              ? `${styles.userForm__input} ${styles.userForm__inputError}`
              : styles.userForm__input 
          }
        />
        <span 
          className={ 
            passwordVisible
              ? `${styles.userForm__password} ${styles.userForm__pasVisible}`
              : `${styles.userForm__password} ${styles.userForm__pasUnvisible}`
          } 
          onClick={ () => setPasswordVisible((prev) => !prev) }
        >
        </span>
      </div>

      <div className={ styles.userForm__item }>
        { passwordsMatchError && 
          <span 
          className={ styles.userForm__errorInfo  } 
          onMouseOver={ () => setConfirmPasswordInfo(true) }
          onMouseOut={ () => setConfirmPasswordInfo(false) }
          >
            { confirmPasswordInfo &&
              <span 
                className={ styles.userForm__errorInfo_message }
              >
                The fields, password and confirm password must match. And must be at least 4 and not more than 15 characters!
              </span>
            }
          </span>
        }
        <input 
          type={ confirmPasswordVisible ? 'text' : 'password' }
          placeholder='Confirm the password'
          value={ confirmPassword.value }
          onChange={ confirmPassword.onChange }
          onBlur={ confirmPassword.onBlur }
          className={ 
            passwordsMatchError
              ? `${styles.userForm__input} ${styles.userForm__inputError}`
              : styles.userForm__input 
          }
        />
        <span 
          className={ 
            confirmPasswordVisible
              ? `${styles.userForm__password} ${styles.userForm__pasVisible}`
              : `${styles.userForm__password} ${styles.userForm__pasUnvisible}`
          } 
          onClick={ () => setConfirmPasswordVisible((prev) => !prev) }
        >
        </span>
      </div>

      <Button text='Sign Up' additionalClasses={ styles.userForm__submit }/>

      <p>
        Already have an account?&nbsp;
        <a
          className={ styles.userForm__change } 
          href="#"
          onClick={ changeFormHandler }
        >
          Sign In!
        </a>
      </p>
    </form>
  );
}

export default SignUp;