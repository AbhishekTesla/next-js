import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul >
        <li>
          <Link className={navStyles.navText}  href='/'>Home</Link>
        </li>
        <li>
          <Link className={navStyles.navText} href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav