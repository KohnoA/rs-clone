import styles from './Button.module.scss';

interface IButton {
  text: string,
  additionalClasses?: string,
  onClick?: () => void
};

const Button: React.FC<IButton> = ({ text, additionalClasses, onClick }) => {
  return (
    <button className={ `${styles.button} ${additionalClasses}` } onClick={ onClick }> { text } </button>
  );
}

export default Button;