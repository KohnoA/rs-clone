import Slider from './components/Slider/Slider';
import Info from './components/Info/Info';
import Group from './components/Group/Group';
import styles from './Main.module.scss';

const Main: React.FC = () => {

  return (
    <div className='container page'>
      <h3 className={ styles.title }>Popular recipes</h3>

      <Slider />

      <Info />

      <h3 className={ styles.title }>Dishes of the day</h3>
      <Group title='Breakfast' background='red' linkGroup='breakfast' orientationClass='left' />
      <Group title='Lanch' background='green' linkGroup='lanch' orientationClass='right' />
      <Group title='Dinner' background='blue' linkGroup='dinner' orientationClass='left' />
    </div>
  )
}

export default Main
