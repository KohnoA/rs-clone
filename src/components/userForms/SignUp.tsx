import { useInput } from '../../hooks/useInput';
import { Validations, ModalContent, AuthErrorsMessage } from '../../constants/constants';
import styles from './userForms.module.scss';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { openModal, closeModal } from '../../store/slices/modalSlice';

const SignUp: React.FC = () => {
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
  const [formError, setFormError] = useState<string | AuthErrorsMessage>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      (confirmPassword.isDirty && !confirmPassword.isValid) || 
      password.value !== confirmPassword.value
    ) setPasswordsMatchError(true);
    else setPasswordsMatchError(false);
    
  }, [confirmPassword.value, password.value, confirmPassword.isDirty, confirmPassword.isValid]);

  const changeFormHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(openModal({content: ModalContent.signIn}));
  }

  const signUpHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email.isValid || !password.isValid || !name.isValid || passwordsMatchError) {
      setFormError(AuthErrorsMessage.invalidFields);
      return;
    }

    setFormError('');
    signUpNewUser(email.value.toLowerCase(), password.value.toLowerCase());
  }

  const signUpNewUser = (userEmail: string, userPassword: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid
        }));

        navigate('/');
        dispatch(closeModal());
      })
      .catch((error) => {
        console.error(error.code, error.message);

        setFormError(AuthErrorsMessage.isExist);
      });
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
              <span className={ styles.userForm__errorInfo_message }>
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
              <span className={ styles.userForm__errorInfo_message }>
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
              <span className={ styles.userForm__errorInfo_message }>
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

      <div className={ styles.userForm__item }>
        { passwordsMatchError && 
          <span 
          className={ styles.userForm__errorInfo  } 
          onMouseOver={ () => setConfirmPasswordInfo(true) }
          onMouseOut={ () => setConfirmPasswordInfo(false) }
          >
            { confirmPasswordInfo &&
              <span className={ styles.userForm__errorInfo_message }>
                The fields, password and confirm password must match. And must be at least 6 and not more than 15 characters!
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

      { formError && <div className={ styles.userForm__formError }>{ formError }</div> }
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