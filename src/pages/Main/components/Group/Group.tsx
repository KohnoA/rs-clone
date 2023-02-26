import styles from './Group.module.scss';
import RecipeCard from '../../../../components/RecipeCard/RecipeCard';

interface GroupProps {
  title: string,
  orientationClass?: string
}

const Group: React.FC<GroupProps> = ({ title, orientationClass }) => {
  return (
    <div className={ `${styles.component} ${orientationClass ? styles[orientationClass] : ''}` }>
      <div className={ styles.recipes }>
        <h3 className={ styles.title }>{ title }</h3>
        <div className={ styles.wrapper }>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />

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