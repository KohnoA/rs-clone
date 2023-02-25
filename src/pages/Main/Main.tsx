import Slider from './components/Slider/Slider';
import Info from './components/Info/Info';
import Group from './components/Group/Group';
import styles from './Main.module.scss';

const Main: React.FC = () => {

  return (
    <div className='container page'>
      <h3 className={ styles.title }>Dishes of the day</h3>

      <Slider />

      <Info />

      <Group title='Breakfast' />
      <Group title='Lanch' />
      <Group title='Dinner' />
    </div>
  )
}

export default Main
