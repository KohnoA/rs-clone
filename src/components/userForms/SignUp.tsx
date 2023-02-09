import { useInput } from '../../hooks/useInput';
import styles from './userForms.module.scss';
import Button from '../Button/Button';

interface ISignUpProp {
  changeForm: () => void
}

const SignUp: React.FC<ISignUpProp> = ({ changeForm }: ISignUpProp) => {
  const [name, clearName] = useInput('');
  const [email, clearEmail] = useInput('');
  const [password, clearPassword] = useInput('');
  const [confirmPassword, clearConfirmPassword] = useInput('');


  const signUpHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email.value || !password.value) return;

    console.log(`name - ${name.value}`);
    console.log(`email - ${email.value}`);
    console.log(`password - ${password.value}`);
    console.log(`confirmPassword - ${confirmPassword.value}`);

    clearName();
    clearEmail();
    clearPassword();
    clearConfirmPassword();
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
        { ...name }
      />
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
      <input 
        type="password"
        placeholder='Confirm the password'
        className={ styles.userForm__input }
        { ...confirmPassword }
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