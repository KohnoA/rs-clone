import { useState } from 'react';
import styles from './userForms.module.scss';
import Button from '../Button/Button';

interface ISignUpProp {
  changeForm: () => void
}

const SignUp: React.FC<ISignUpProp> = ({ changeForm }: ISignUpProp) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const signUpHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) return;

    console.log(`name - ${name}`);
    console.log(`email - ${email}`);
    console.log(`password - ${password}`);
    console.log(`confirmPassword - ${confirmPassword}`);
  }

  const changeFormHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    changeForm();
  }

  return (
    <form action="#" className={ styles.userForm } onSubmit={ signUpHandler }>

      <input 
        type="text"
        placeholder='Your Name'
        className={ styles.userForm__input }
        value={ name }
        onChange={ (event) => setName(event.target.value) }
      />
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
      <input 
        type="password"
        placeholder='Confirm the password'
        className={ styles.userForm__input }
        value={ confirmPassword }
        onChange={ (event) => setConfirmPassword(event.target.value) }
      />

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