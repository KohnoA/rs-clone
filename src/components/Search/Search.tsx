import { useState, useCallback, MouseEvent as ReactMouseEvent } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { useFetchRecipesQuery } from '../../sevices/foodService.api';
import RecipeCard from '../RecipeCard/RecipeCard';
import styles from './Search.module.scss';
import kcalIcon from '../../assets/icons/kcal.svg'
import iconType from '../../assets/icons/food.svg'
import { IRecipesData } from '../../types/types';
import { useDispatch } from 'react-redux';
// import { RootState } from '../../store/store';
// import { getSearchList } from '../../store/selectors/searchSelectors';
import { searchSlice } from '../../store/slices/searchSlice';

interface ISearch {
  request: string;
}

const Search: React.FC<ISearch> = ({request}: ISearch) => {
  const [value, setValue] = useState<string>('');
  const [searchList, setSearchList] = useState(false)
  const debounced = useDebounce(value)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {isLoading, isError, data} = useFetchRecipesQuery(debounced, {
    skip: debounced.length < 3
  })

  const recipesSearch: IRecipesData[] | undefined = data?.hits

  const dispatch = useDispatch()
  // const requestING = useSelector((state: RootState) => {
  //   getSearchList(state)
  // })
  const searchRecipes = useCallback(
    (event: ReactMouseEvent<HTMLButtonElement>) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
      setSearchList(debounced.length > 3 && data?.hits.length! > 0)

      event.preventDefault()
      dispatch(searchSlice.actions.searchRecipe(request))
    },
    [request]
)

//   useEffect(() => {
    // // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
    // setSearchList(debounced.length > 3 && data?.hits.length! > 0)
//  }, [debounced, data])

  // const submitHandler = (event: React.FormEvent, recipe?: string) => {
  //   if (!value || !recipe) return
  //   event.preventDefault();
  //   setSearchList(true)
  // };

  return (
    <form 
      className={ styles.search }
      action="#"
      method="GET"
      // onSubmit={searchRecipe}
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
            {searchList && 
                    recipesSearch?.map(recipe => 
                       <RecipeCard
                       key={recipe.recipe.label}
                       id={recipe.recipe.label}
                       title={recipe.recipe.label} 
                       route='recipes'
                        header={recipe.recipe.cuisineType}
                        image={recipe.recipe.image}
                        type={recipe.recipe.dishType}
                        typeIcon={iconType}
                        kcalIcon={kcalIcon}
                        kcal={Math.round(Number(recipe.recipe.calories))}
                       />
                       
                    )
                } 
      {<button
        className={ value ? styles.search__find : `${styles.search__find} ${styles.search__hidden}` }
        type="submit"
        onClick={searchRecipes}
      >
        Search
       </button>}
      
    </form>
  );
}

export default Search;