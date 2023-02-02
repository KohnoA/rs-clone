import styles from './Search.module.scss'

function Search() {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <form 
      className={ styles.search }
      action="#"
      method="GET"
      onSubmit={ submitHandler }
    >
      <input
        className={ styles.search__input }
        type="text" 
        placeholder="Carbonara..."
      />

      <span className={ styles.search__clean }></span>
      
      <button
        className={ styles.search__find }
        type="submit"
      >
        Search
      </button>
    </form>
  )
}

export default Search