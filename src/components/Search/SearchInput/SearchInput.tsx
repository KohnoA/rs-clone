import styles from './SearchInput.module.scss'

interface ISearchInput {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickReset: () => void
  onClickHandler: (event: React.FormEvent) => void
  placeholder: string
  additionalClass?: string
}

const SearchInput = ({ ...props }: ISearchInput) => {
  return (
    <form className={`${styles.search} ${props.additionalClass}`} action='#' method='GET'>
      <input
        className={styles.search__input}
        type='text'
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <span
        className={props.value ? styles.search__clean : `${styles.search__clean} ${styles.search__hidden}`}
        onClick={props.onClickReset}
      />
      <button
        className={props.value ? styles.search__find : `${styles.search__find} ${styles.search__hidden}`}
        type='submit'
        onClick={props.onClickHandler}
      >
        Search
      </button>
    </form>
  )
}

export default SearchInput
