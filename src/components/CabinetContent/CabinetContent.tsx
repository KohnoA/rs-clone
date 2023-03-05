import { useState } from 'react'
import FavoritePage from '../../pages/Favorite/FavoritePage'
import Button from '../Button/Button'
import BuyList from '../BuyList/BuyList'
import styles from './CabinetContent.module.scss'

const CabinetContent = () => {
  const [page, setPage] = useState<boolean>(true)
  return (
    <div className={styles.cabinetContent__wrapper}>
      <div className={styles.cabinetContent__controls}>
        <Button
          text='Favorite recipes'
          onClick={() => setPage(true)}
          additionalClasses={page ? styles.cabinetBtn_active : ''}
        />
        <Button
          text='Buy list'
          onClick={() => setPage(false)}
          additionalClasses={page ? '' : styles.cabinetBtn_active}
        />
      </div>
      {page ? <FavoritePage /> : <BuyList />}
    </div>
  )
}

export default CabinetContent
