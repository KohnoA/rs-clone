import Slider from './components/Slider/Slider';
import Info from './components/Info/Info';
import Group from './components/Group/Group';
import styles from './Main.module.scss';
import { MainRequestsQuery } from '../../constants/constants';

const Main: React.FC = () => {
  return (
    <div className='container page'>
      <h3 className={ styles.title }>Healthy eating</h3>

      <Slider category={ MainRequestsQuery.balance } />
      <Info />

      <h3 className={ styles.title }>Dishes of the day</h3>
      <Group
        title='Breakfast'
        background='red'
        linkGroup='breakfast'
        category={ MainRequestsQuery.breakfast }
        orientationClass='left'
      />
      <Group
        title='Lunch'
        background='green'
        linkGroup='lunch'
        category={ MainRequestsQuery.lunch }
        orientationClass='right'
      />
      <Group
        title='Dinner'
        background='blue'
        linkGroup='dinner'
        category={ MainRequestsQuery.dinner }
        orientationClass='left'
      />
    </div>
  )
}

export default Main
