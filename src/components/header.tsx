import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaHome, FaLink, FaUser } from 'react-icons/fa'
import { MdPrivacyTip } from 'react-icons/md'

import styles from '../styles/header.module.scss'

const ModeSwitch = dynamic(() => import('./mode-switch'))

interface NavItem {
  label: string
  path: string
  icon: unknown
}

const Header = () => {
  const { asPath } = useRouter()

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' , icon: <FaHome color={'#999'} /> },
    { label: 'About', path: '/about', icon: <FaUser color={'#999'} /> },
    { label: 'NUOVOTAKA', path: 'https://nuovotaka.com', icon: <FaLink color={'#999'} /> },
    { label: 'Privacy', path: '/privacy', icon: <MdPrivacyTip color={'#999'} /> },
  ]

  return (
    <header className={styles.header}>
      <ul>
        {navItems.map(({ label, path, icon }) => (
          <li key={label} >
            <span className={styles.icon}>{icon}</span>
            <span className={styles.title}>
              <Link href={path} passHref>
                <a className={asPath === path ? 'active' : null}>{label}</a>
              </Link>
            </span>
          </li>
        ))}
      </ul>
      <ModeSwitch />
    </header>
  )
}

export default Header
