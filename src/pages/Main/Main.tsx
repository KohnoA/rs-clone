import Slider from './components/Slider/Slider';
import Info from './components/Info/Info';
import Group from './components/Group/Group';
import styles from './Main.module.scss';
import axios, { AxiosError } from 'axios';
import { API_KEY_RECIPES, ID_RECIPES, IMAGE_SIZE, TYPE, RECIPES } from '../../constants/foodApi';
import { MainRequestsQuery } from '../../constants/constants';
import { IRecipesData } from '../../types/types';

const Main: React.FC = () => {
  const getRecipes = async (query: MainRequestsQuery, count: number): Promise<IRecipesData[] | undefined> => {
    try {
      const {data} = await axios.get(`https://api.edamam.com/api/${RECIPES}?type=${TYPE}&app_id=${ID_RECIPES}&app_key=${API_KEY_RECIPES}&${query}&imageSize=${IMAGE_SIZE}&random=true`);
      return data.hits.slice(0, count);

    } catch (error: unknown) {
      if (error instanceof AxiosError) console.error(error.message);
    }
  }

  return (
    <div className='container page'>
      <h3 className={ styles.title }>Healthy eating</h3>

      <Slider getData={ getRecipes } />

      <Info />

      <h3 className={ styles.title }>Dishes of the day</h3>
      <Group title='Breakfast' background='red' linkGroup='breakfast' orientationClass='left' />
      <Group title='Lanch' background='green' linkGroup='lanch' orientationClass='right' />
      <Group title='Dinner' background='blue' linkGroup='dinner' orientationClass='left' />
    </div>
  )
}

export default Main
