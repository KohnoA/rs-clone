import { useInput } from '../../hooks/useInput';
import { Validations, ModalContent, AuthErrorsMessage } from '../../constants/constants';
import styles from './userForms.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { openModal, closeModal } from '../../store/slices/modalSlice';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../store/slices/userSlice';
import InputItem from '../InputItem/InputItem';

const SignIn: React.FC = () => {
  const [formError, setFormError] = useState<string | AuthErrorsMessage>('');
  const email = useInput('', Validations.email);
  const password = useInput('', Validations.password);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changeFormHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    dispatch(openModal({ content: ModalContent.signUp }))
  }

  const signInHandler = (event: React.FormEvent) => {
    event.preventDefault()

    if (!email.isValid || !password.isValid) {
      setFormError(AuthErrorsMessage.invalidFields)
      return
    }

    setFormError('')
    signInExistingUser(email.value.toLowerCase(), password.value.toLowerCase())
  }

  const signInExistingUser = async (userEmail: string, userPassword: string) => {
    const auth = getAuth()

    try {
      const { user } = await signInWithEmailAndPassword(auth, userEmail, userPassword)

      dispatch(
        setUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
          name: user.displayName,
        }),
      )

      navigate('/')
      dispatch(closeModal())
      localStorage.setItem('login', `${user.email}`)
      location.reload()
    } catch (error) {
      if (error instanceof Error) console.error(error.message)

      setFormError(AuthErrorsMessage.notFound)
    }
  }

  return (
    <form action="#" className={ styles.userForm } onSubmit={ signInHandler }>
      <InputItem 
        input={ email }
        placeholder={ 'E-mail' }
        errorMessage={ `The email address must contain the "@" symbol. "${email.value}" address is missing "@" character.` }
      />

      <InputItem 
        input={ password }
        placeholder={ 'Password' }
        errorMessage={ 'The password must be at least 6 and not more than 15 characters!' }
        isPassword={ true }
      />

      {formError && <div className={styles.userForm__formError}>{formError}</div>}
      <Button text='Sign In' additionalClasses={styles.userForm__submit} />

      <a href='#' className={styles.userForm__help} onClick={(event) => event.preventDefault()}>
        Forgot your password?
      </a>

      <p>
        Don&lsquo;t have an account?&nbsp;
        <a className={styles.userForm__change} href='#' onClick={changeFormHandler}>
          Register!
        </a>
      </p>
    </form>
  )
}

export default SignIn
