import React, { useEffect, useState } from 'react'
import image from '../../assets/images/person-avatar-placeholder.png'
import { useAuth } from '../../hooks/useAuth'
import Button from '../Button/Button'
import styles from './Avatar.module.scss'
import AvatarListItem from './components/AvatarListItem'
import { IProfileData, ProfileData } from './components/ProfileData'

const Avatar: React.FC = () => {
  const { name, id } = useAuth()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const getAboutData = localStorage.getItem(`User-info__${id}`) ?? JSON.stringify(ProfileData)
  const aboutData = JSON.parse(getAboutData)

  const [age, setAge] = useState(aboutData.age)
  const [city, setCity] = useState(aboutData.city)
  const [height, setHeight] = useState(aboutData.height)
  const [weigth, setWeight] = useState(aboutData.weigth)
  const [about, setAbout] = useState(aboutData.about)

  const editData = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true)

    if (isEditing) {
      const aboutInfo: IProfileData = {
        age,
        city,
        height,
        weigth,
        about,
      }

      localStorage.setItem(`User-info__${id}`, JSON.stringify(aboutInfo))
    }
  }

  useEffect(() => {
    setAge(aboutData.age)
    setCity(aboutData.city)
    setHeight(aboutData.height)
    setWeight(aboutData.weigth)
    setAbout(aboutData.about)
  }, [localStorage.getItem(`${id}`)])

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.avatar__openBtn}></button>
      <div className={`${styles.avatar} ${isOpen ? styles.avatar_active : ''}`}>
        <div className={styles.avatarHeaderWrapper}>
          <img className={styles.avatar__img} src={image} alt='avatar' />
          <h3 className={styles.avatar__header}>{name}</h3>
          {isEditing ? (
            <textarea
              onChange={(event) => setAbout(event.target.value)}
              className={styles.textContent}
              defaultValue='About you...'
            ></textarea>
          ) : (
            <p className={styles.avatar__text}>{about}</p>
          )}
        </div>
        <ul className={styles.avatarList}>
          <AvatarListItem
            className={styles.avatarList__item}
            name='Age'
            edit={isEditing}
            value={age}
            onChange={(event) => setAge(event.target.value)}
            type='number'
            placeholder={'Enter your age...'}
          />
          <AvatarListItem
            className={styles.avatarList__item}
            name='City'
            edit={isEditing}
            value={city}
            onChange={(event) => setCity(event.target.value)}
            type='text'
            placeholder={'Enter your city...'}
          />
          <AvatarListItem
            className={styles.avatarList__item}
            name='Height'
            edit={isEditing}
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            type='text'
            placeholder={'Enter your height...'}
          />
          <AvatarListItem
            className={styles.avatarList__item}
            name='Weigth'
            edit={isEditing}
            value={weigth}
            onChange={(event) => setWeight(event.target.value)}
            type='number'
            placeholder={'Enter your weigth...'}
          />
        </ul>
        <Button text={isEditing ? 'Save' : 'Edit'} onClick={editData} />
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`${styles.avatar__overlay} ${isOpen ? styles.avatar__overlay_active : ''}`}
      ></div>
    </>
  )
}

export default Avatar
