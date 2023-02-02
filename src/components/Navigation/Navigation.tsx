import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

function Navigation() {
  return (
    <nav className={ styles.navigation }>
      <ul className={ styles.navigation__list }>
        <li>
          <Link to="/">Recipes</Link>
        </li>
        <li>
          <Link to="/constructor">Constructor</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation