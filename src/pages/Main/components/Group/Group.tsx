import styles from './Group.module.scss';

interface GroupProps {
  title: string,
}

const Group: React.FC<GroupProps> = ({ title }) => {
  return (
    <div className={ styles.component }>
      <h3 className={ styles.title }>{ title }</h3>
    </div>
  );
}

export default Group;