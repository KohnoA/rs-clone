import styles from './Group.module.scss';
import RecipeCard from '../../../../components/RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';

interface GroupProps {
  title: string,
  background: string,
  linkGroup: string,
  cardCount?: number,
  orientationClass?: string,
}

const Group: React.FC<GroupProps> = ({ title, background, linkGroup, cardCount = 6, orientationClass }) => {
  return (
    <div className={ `${styles.component} ${orientationClass ? styles[orientationClass] : ''}` }>
      <div className={ `${styles.recipes} ${styles[background]}` }>
        <h3 className={ styles.title }>{ title }</h3>
        <div className={ styles.wrapper }>
          { new Array(cardCount).fill(0).map((_, index) => <RecipeCard key={`${title}${index}`} />) }

        </div>
      </div>
      <Link to={`/?mealType=${linkGroup}`} className={ styles.goToButton }>
        <span className={ styles.goToButtonArrow }></span>
        Show more
      </Link>
    </div>
  );
}

export default Group;