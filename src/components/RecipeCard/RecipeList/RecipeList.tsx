import React, { useEffect, useRef, useState } from 'react';
import { IRecipes, IRecipesData } from '../../../types/types';
import RecipeService from '../../API/RecipeService';
import { useFetching } from '../../../hooks/useFetching';
import Loader from '../../Loader/Loader';
import RecipeFilter from '../../RecipeFilter/RecipeFilter';
import RecipeCard from '../RecipeCard';
import iconType from '../../../assets/icons/food.svg'
import kcalIcon from '../../../assets/icons/kcal.svg'
import styles from '../../../pages/Recipes/pageRecipes.module.scss'
import { useLocation } from 'react-router-dom';
// import { foodAPI } from '../../../sevices/foodService';

const RecipeList: React.FC<IRecipes> = ({url}: IRecipes) => {

    const [recipes, setRecipes] = useState<IRecipesData[]>([])
    const [query, setQuery] = useState<string>('')
    const [nextPage, setNextPage] = useState<string>('')
    const [isPaginationLoad, setIsPaginationLoad] = useState<boolean>(false)
    // const variable = foodAPI.use;
  
    const lastElement = useRef<HTMLDivElement | null>(null)
    const observer = useRef<IntersectionObserver | null>(null)

  
    const [fetchingRecipes, isRecipesLoading, errorRecipes] = useFetching(async() => {
            const response = await RecipeService.getRecipes(`${url}&${query}`)
            setRecipes(response.hits)
            setNextPage(response._links.next.href)
        })


    const changePage = async (url: string): Promise<void> => {
            setIsPaginationLoad(true)

            const response = await RecipeService.getRecipes(`${url}`)
            setNextPage(response._links.next.href)
            setRecipes([...recipes, ...response.hits])
    }

    const extractUri = (i: number): string => {
            const mainLink = recipes[i].recipe.uri
            const uri = mainLink.slice(mainLink.indexOf('_') + 1)
            return(uri)
    }

    const params = useLocation();
    useEffect(() => {
        const queryStr = params.search.slice(1)

        setQuery(queryStr)
        fetchingRecipes(url, queryStr)
     }, [params, query])


    useEffect(() => {
          if(isRecipesLoading || !lastElement.current) return

          if(observer.current) observer.current.disconnect()
            
        const callback = function(entries: IntersectionObserverEntry[]) {
            if(entries[0].isIntersecting) {
                  changePage(nextPage)
            }
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(lastElement.current)
        setIsPaginationLoad(false)

      }, [nextPage])

    return (      
      <div className={styles.pageRecipes}>
        <RecipeFilter/>
        {errorRecipes && 
        <div style={{margin:'2em'}}><h1>Error has occured. {errorRecipes}</h1></div>}
        {isRecipesLoading &&
               <Loader/>}
              <div className={styles.recipesWrapper}>
                    {recipes.map((recipe, i) => 
                          <RecipeCard  
                          route='recipes'
                          key={i}
                          id={extractUri(i)}
                          header={recipe.recipe.cuisineType}
                          image={recipe.recipe.image}
                          type={recipe.recipe.dishType}
                          typeIcon={iconType}
                          kcalIcon={kcalIcon}
                          kcal={Math.round(Number(recipe.recipe.calories))}
                          title={recipe.recipe.label}
                    />)}
                    {isPaginationLoad && <Loader/>}
                  <div ref={lastElement}></div>
              </div>
      </div>

    );
};

export default RecipeList;