import styles from './Title.module.scss';

interface IProps {
  text: string,
  cal?: number,
}

export const Title: React.FC<IProps> = ({text, cal}: IProps) => {
    return (
        <h2 className={styles['about-page__title']}>
            {text} {cal}
        </h2>
    );
};
