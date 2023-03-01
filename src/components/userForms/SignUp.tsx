import { useInput } from '../../hooks/useInput';
import { Validations, ModalContent, AuthErrorsMessage } from '../../constants/constants';
import styles from './userForms.module.scss';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { openModal, closeModal } from '../../store/slices/modalSlice';
import InputItem from '../InputItem/InputItem';

const SignUp: React.FC = () => {
  const name = useInput('', Validations.name);
  const email = useInput('', Validations.email);
  const password = useInput('', Validations.password);
  const confirmPassword = useInput('', Validations.password);
  const [passwordsMatchError, setPasswordsMatchError] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | AuthErrorsMessage>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      (confirmPassword.isDirty && !confirmPassword.isValid) ||
      password.value !== confirmPassword.value
    )
      setPasswordsMatchError(true)
    else setPasswordsMatchError(false)
  }, [confirmPassword.value, password.value, confirmPassword.isDirty, confirmPassword.isValid])

  const changeFormHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    dispatch(openModal({ content: ModalContent.signIn }))
  }

  const signUpHandler = (event: React.FormEvent) => {
    event.preventDefault()

    if (!email.isValid || !password.isValid || !name.isValid || passwordsMatchError) {
      setFormError(AuthErrorsMessage.invalidFields)
      return
    }

    setFormError('')
    signUpNewUser(email.value.toLowerCase(), password.value.toLowerCase(), name.value)
  }

  const signUpNewUser = async (userEmail: string, userPassword: string, userName: string) => {
    const auth = getAuth()

    try {
      const { user } = await createUserWithEmailAndPassword(auth, userEmail, userPassword)
      await updateProfile(user, { displayName: userName })

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
      localStorage.setItem('login', `${user.uid}`)
      location.reload()
    } catch (error) {
      if (error instanceof Error) console.error(error.message)

      setFormError(AuthErrorsMessage.isExist)
    }
  }

  return (
    <form action="#" className={ styles.userForm } onSubmit={ signUpHandler }>
      <InputItem 
        input={ name }
        placeholder={ 'Your name' }
        errorMessage={ 'The name must be at least 3 and not more than 16 characters!' }
      />

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

      <InputItem 
        input={ confirmPassword }
        placeholder={ 'Confirm the password' }
        errorMessage={ 'The fields, password and confirm password must match. And must be at least 6 and not more than 15 characters!' }
        isPassword={ true }
      />

      {formError && <div className={styles.userForm__formError}>{formError}</div>}
      <Button text='Sign Up' additionalClasses={styles.userForm__submit} />

      <p>
        Already have an account?&nbsp;
        <a className={styles.userForm__change} href='#' onClick={changeFormHandler}>
          Sign In!
        </a>
      </p>
    </form>
  )
}

export default SignUp
