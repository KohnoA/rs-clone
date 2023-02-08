import { useState } from 'react';
import styles from './userForms.module.scss';
import Button from '../Button/Button';

interface ISignInProp {
  changeForm: () => void
}

const SignIn: React.FC<ISignInProp> = ({ changeForm }: ISignInProp) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signInHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) return;

    console.log(`email - ${email}`);
    console.log(`password - ${password}`);

  }

  const changeFormHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    changeForm();
  }

  return (
    <form action="#" className={ styles.userForm } onSubmit={ signInHandler }>

      <input 
        type="email"
        placeholder='E-mail'
        className={ styles.userForm__input }
        value={ email }
        onChange={ (event) => setEmail(event.target.value) }
      />
      <input 
        type="password"
        placeholder='Password'
        className={ styles.userForm__input }
        value={ password }
        onChange={ (event) => setPassword(event.target.value) }
      />

      <Button text='Sign In' additionalClasses={ styles.userForm__submit }/>
      <a href="#" className={ styles.userForm__help }>Forgot your password?</a> 

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