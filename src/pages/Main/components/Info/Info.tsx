import styles from './Info.module.scss';
import { MAIN_APP_INFO } from '../../../../constants/constants';
import { Link } from 'react-router-dom';

const Info: React.FC = () => {
  return (
    <div className={ styles.component }>
      <h3 className={ styles.title }>What is IEAT?</h3>

      <div className={ styles.wrapper }>
        {MAIN_APP_INFO.map((item, index) => 
          <div className={ styles.item_component } key={ index }>
            <div className={ styles.item_title }>{ item.title }</div>
            <div className={ styles.item_subTitle }>{ item.subTitle }</div>
            <p className={ styles.item_description }>{ item.description }</p>
            <div><Link to={ item.link }>Go to { item.title }</Link></div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Info;