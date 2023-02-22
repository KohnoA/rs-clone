import React, { useEffect, useRef, useState, useMemo } from 'react';
import {  IRecipesData } from '../../../types/types';
import RecipeService from '../../API/RecipeService';
import { useFetching } from '../../../hooks/useFetching';
import Loader from '../../Loader/Loader';
import RecipeFilter from '../../RecipeFilter/RecipeFilter';
import RecipeCard from '../RecipeCard';
import iconType from '../../../assets/icons/food.svg'
import kcalIcon from '../../../assets/icons/kcal.svg'
import styles from '../../../pages/Recipes/pageRecipes.module.scss'
import { useLocation } from 'react-router-dom';
import * as API from '../../../constants/foodApi';
import { useSelector } from 'react-redux';
import { getSearchList } from '../../../store/selectors/searchSelectors';
import Button from '../../Button/Button'

const RecipeList: React.FC = () => {

    const [recipes, setRecipes] = useState<IRecipesData[]>([])
    const [nextPage, setNextPage] = useState<string>('')
    const [isPaginationLoad, setIsPaginationLoad] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)

    const location = useLocation();
    const [search, isEditingSearch] = useSelector(getSearchList)

    const url = useMemo(() => {
      const params = new URLSearchParams(location.search)
      params.set('type', API.TYPE)
      params.set('app_id', API.ID_RECIPES)
      params.set('app_key', API.API_KEY_RECIPES)
      params.set('imageSize', API.IMAGE_SIZE)

      if(search && !isEditingSearch){
        params.set('q', search)
      }

      return `${API.DOMAIN}/${API.RECIPES}?${String(params)}`

    }, [location.search, search, isEditingSearch])

    const [fetchingRecipes, isRecipesLoading] = useFetching(async() => {

      if(isEditingSearch) {
        return
      }

      const response = await RecipeService.getRecipes(url)
      setRecipes(response.hits)
      setNextPage(response._links.next.href)
    })

    useEffect(() => {
      fetchingRecipes()
    }, [url, search, isEditingSearch])

    const lastElement = useRef<HTMLDivElement | null>(null)
    const observer = useRef<IntersectionObserver | null>(null)

    const changePage = async (url: string): Promise<void> => {
      setIsPaginationLoad(true)

      const response = await RecipeService.getRecipes(`${url}`)
      setNextPage(response._links.next.href)
      setRecipes([...recipes, ...response.hits])
    }

    useEffect(() => {
      if(isRecipesLoading || !lastElement.current) return

      if(observer.current) observer.current.disconnect()

      const callback = function(entries: IntersectionObserverEntry[]) {
          if(entries[0].isIntersecting) {
            try{
                changePage(nextPage)
              } catch (err) {
                console.error(`Error has occured, ${err}`)
              }
          }
      }

        observer.current = new IntersectionObserver(callback)
        observer.current.observe(lastElement.current)
        setIsPaginationLoad(false)

    }, [nextPage])

    const extractUri = (i: number): string => {
      const mainLink = recipes[i].recipe.uri
      const uri = mainLink.slice(mainLink.indexOf('_') + 1)
      return(uri)
    }

    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

      setVisible(false)
    }

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      scrollY < 1800 ? setVisible(false) : setVisible(true)
    })

  return (
    <div className={styles.pageRecipes}>
      <div className={styles.filterWrapper}>
      <RecipeFilter/>
      <Button
        text='To Begin'
        additionalClasses={`${styles.upBtn} ${visible ? styles.upBtn__visible : ''}`}
        onClick={scrollUp}
      />
      </div>
      {isRecipesLoading
        ? <Loader/>
        : recipes.length === 0
          ? <div style={{margin:'2em'}}><h1>Error has occured. Maybe it`s too many requests. Please, try later.</h1></div>
          :
            <div className={styles.recipesWrapper}>
            {recipes.map((recipe, i) => (
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
              />
            ))}
            <div ref={lastElement}></div>
          </div>

      }
      <div className={styles.devider}/>
      {isPaginationLoad && <div className={styles.paginationLoader}><Loader/></div>}
    </div>
  );
};

export default RecipeList;
