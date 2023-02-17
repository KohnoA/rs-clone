import styles from './title.module.scss';

interface IProps {
  text: string,
}

export const Title: React.FC<IProps> = ({text}: IProps) => {
    return (
        <h1 className={styles['about-page__title']}>
            {text}
        </h1>
    );
};
