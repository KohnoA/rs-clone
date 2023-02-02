import styles from './Header.module.scss'
import Navigation from '../Navigation/Navigation'
import Search from '../Search/Search'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'

function Header() {
  return (
    <div
      className={ 'container' + ' ' + styles.header }
    >
      <Logo />
      <Search />
      <Navigation />

      <button className={ styles.header__add }>+</button>
      <Button text="Login"/>
    </div>
  )
}

export default Header