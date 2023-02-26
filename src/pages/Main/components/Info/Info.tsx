import styles from './Info.module.scss';
import { MAIN_APP_INFO } from '../../../../constants/constants';

const Info: React.FC = () => {
  return (
    <div className={ styles.component }>
      <h3 className={ styles.title }>What is IEAT?</h3>

      <div className={ styles.wrapper }>
        {MAIN_APP_INFO.map((item, index) => 
          <div key={ index }>
            <div className={ styles.sub_title }>{ item.title }</div>
            <div>{ item.subTitle }</div>
            <p>{ item.description }</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Info;