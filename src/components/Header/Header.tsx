import styles from './Header.module.scss'
import Navigation from '../Navigation/Navigation'
import Search from '../Search/Search'
import Logo from '../Logo/Logo'

function Header() {
  return (
    <div
      className={ 'container' + ' ' + styles.header }
    >
      <Logo />

      <Search />

      <Navigation />

      <button>+</button>

      <button>Sign in</button>
    </div>
  )
}

export default Header