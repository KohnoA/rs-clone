import { useInput } from '../../hooks/useInput';
import styles from './userForms.module.scss';
import Button from '../Button/Button';

interface ISignInProp {
  changeForm: () => void
}

const SignIn: React.FC<ISignInProp> = ({ changeForm }: ISignInProp) => {
  const [email, clearEmail] = useInput('');
  const [password, clearPassword] = useInput('');

  const signInHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email.value || !password.value) return;

    console.log(`email - ${email.value}`);
    console.log(`password - ${password.value}`);

    clearEmail();
    clearPassword();
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
        { ...email }
      />
      <input 
        type="password"
        placeholder='Password'
        className={ styles.userForm__input }
        { ...password }
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