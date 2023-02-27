import styles from './Button.module.scss'

interface IButton {
<<<<<<< HEAD
  text: string;
  additionalClasses?: string;
  onClick?: () => void;
};
=======
  text: string
  additionalClasses?: string
  onClick?: () => void
}
>>>>>>> 1c36f40c8a90152ab654ca3ca9d3339372ee4f44

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
>>>>>>> 1c36f40c8a90152ab654ca3ca9d3339372ee4f44
