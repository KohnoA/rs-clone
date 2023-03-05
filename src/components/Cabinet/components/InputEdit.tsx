import styles from '../Avatar.module.scss'

interface IInputEdit {
  type: string
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputEdit: React.FC<IInputEdit> = ({ type, placeholder, value, onChange }: IInputEdit) => {
  return (
    <input
      className={styles.avatar__input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default InputEdit
