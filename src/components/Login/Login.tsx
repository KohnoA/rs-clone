import { useState } from 'react';
import styles from './Login.module.scss';
import Button from '../Button/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) return;

    console.log(`email - ${email} password - ${password}`);
  }

  return (
    <form action="#" className={ styles.login } onSubmit={ submitHandler }>

      <input 
        type="email"
        placeholder='E-mail'
        className={ styles.login__email }
        value={ email }
        onChange={ (event) => setEmail(event.target.value) }
      />
      <input 
        type="password"
        placeholder='Password'
        className={ styles.login__password }
        value={ password }
        onChange={ (event) => setPassword(event.target.value) }
      />

      <Button text='Sign In' additionalClasses={ styles.login__signIn }/>
      <a href="#" className={ styles.login__help }>Forgot your password?</a>

      <p>
        Don&apos;t have an account? <a className={ styles.login__register } href="#">Register!</a>
      </p>
    </form>
  );
}

export default Login;