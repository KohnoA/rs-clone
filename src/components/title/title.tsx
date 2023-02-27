import { FunctionComponent, PropsWithChildren } from 'react'
import styles from './title.module.scss'

export const Title: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <h1 className={styles['about-page__title']}>{children}</h1>
}
