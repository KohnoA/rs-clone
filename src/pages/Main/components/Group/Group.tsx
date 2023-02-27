import styles from './Group.module.scss';
import RecipeCard from '../../../../components/RecipeCard/RecipeCard';

interface GroupProps {
  title: string,
  background: string,
  cardCount?: number,
  orientationClass?: string,
}

const Group: React.FC<GroupProps> = ({ title, background, cardCount = 6, orientationClass }) => {
  return (
    <div className={ `${styles.component} ${orientationClass ? styles[orientationClass] : ''}` }>
      <div className={ `${styles.recipes} ${styles[background]}` }>
        <h3 className={ styles.title }>{ title }</h3>
        <div className={ styles.wrapper }>
          { new Array(cardCount).fill(0).map((_, index) => <RecipeCard key={`${title}${index}`} />) }

        </div>
      </div>
      <div className={ styles.goToButton }>
        <span className={ styles.goToButtonArrow }></span>
        Show more
      </div>
    </div>
  );
}

export default Group;