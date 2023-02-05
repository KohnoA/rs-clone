import { useState } from 'react';
import styles from './Search.module.scss';

const Search: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const submitHandler = (event: React.FormEvent) => {
    if (!value) return
    event.preventDefault();

    console.log(value);
  };

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
        value={ value }
        onChange={ event => setValue(event.target.value) }
      />

      <span
        className={ value ? styles.search__clean : `${styles.search__clean} ${styles.search__hidden}` }
        onClick={ () => setValue('') }
      ></span>

      <button
        className={ value ? styles.search__find : `${styles.search__find} ${styles.search__hidden}` }
        type="submit"
      >
        Search
      </button>
      
    </form>
  );
}

export default Search;