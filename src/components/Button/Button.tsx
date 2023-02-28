import styles from './Button.module.scss'

interface IButton {
<<<<<<< HEAD
  text: string,
  additionalClasses?: string,
  onClick?: () => void;
};
=======
  text: string
  additionalClasses?: string
  onClick?: () => void
}
>>>>>>> develop

const Button: React.FC<IButton> = ({ text, additionalClasses, onClick }) => {
  return (
    <button className={`${styles.button} ${additionalClasses}`} onClick={onClick}>
      {' '}
      {text}{' '}
    </button>
  )
}

<<<<<<< HEAD
export default Button;
=======
export default Button
>>>>>>> develop
