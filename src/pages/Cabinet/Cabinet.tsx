import React from 'react'
import Avatar from '../../components/Cabinet/Avatar'
import CabinetContent from '../../components/CabinetContent/CabinetContent'
import styles from './Cabinet.module.scss'

const Cabinet: React.FC = () => {
  return (
    <div className={styles.cabinet}>
      <Avatar />
      <CabinetContent />
    </div>
  )
}

export default Cabinet
