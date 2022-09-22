import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/header.module.css'

interface NavItem {
  label: string
  path: string
}

const Header = () => {
  const { asPath } = useRouter()

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'NUOVOTAKA.com', path: 'https://nuovotaka.com' },
    { label: 'Privacy', path: '/privacy' },
  ]

  return (
    <header className={styles.header}>
      <ul>
        {navItems.map(({ label, path }) => (
          <li key={label}>
            <Link href={path} passHref>
              <a className={asPath === path ? 'active' : null}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
