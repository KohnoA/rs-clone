import { useInput } from '../../hooks/useInput';
import { Validations, ModalContent } from '../../constants/constants'; 
import styles from './userForms.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { openModal } from '../../store/slices/modalSlice';

const SignIn: React.FC = () => {
  const [formError, setFormError] = useState<boolean>(false);
  const email = useInput('', Validations.email);
  const password = useInput('', Validations.password);
  const [passwordInfo, setPasswordInfo] = useState<boolean>(false);
  const [emailInfo, setEmailInfo] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const signInHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email.isValid || !password.isValid) return;

    console.log(`email - ${email.value}`);
    console.log(`password - ${password.value}`);

    email.clear();
    password.clear();
    setFormError(true);
  }

  const changeFormHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(openModal({content: ModalContent.signUp}));
  }

  const forgotHandler = (event: React.MouseEvent<HTMLAnchorElement>) => event.preventDefault();

  return (
    <form action="#" className={ styles.userForm } onSubmit={ signInHandler }>

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
                The name must be at least 6 and not more than 15 characters!
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

      { formError && <div className={ styles.userForm__formError }>Incorrect login or password!</div> }
      <Button text='Sign In' additionalClasses={ styles.userForm__submit }/>
      <a href="#" className={ styles.userForm__help } onClick={ forgotHandler }>Forgot your password?</a> 

      <p>
        Don&lsquo;t have an account?&nbsp;
        <a
          className={ styles.userForm__change } 
          href="#"
          onClick={ changeFormHandler }
        >
          Register!
        </a>
      </p>
    </form>
  );
}

export default SignIn;