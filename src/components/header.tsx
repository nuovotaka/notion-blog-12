import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaHome, FaLink, FaUser } from 'react-icons/fa'
import { MdPrivacyTip } from 'react-icons/md'

import styles from '../styles/header.module.scss'
import { AppConfig } from '../utils/AppConfig'

const ModeSwitch = dynamic(() => import('./mode-switch'))

interface NavItem {
  label: string
  path: string
  icon: unknown
  color1: string
  color2: string
}

interface ItemCSS extends React.CSSProperties {
  '--i': string
  '--j': string
}

const Header = () => {
  const { asPath } = useRouter()

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' , icon: <FaHome color={'#999'} />, color1: '#ff9966', color2: '#ff5e62' },
    { label: 'About', path: '/about', icon: <FaUser color={'#999'} />, color1: '#56ccf2', color2: '#2f80ed' },
    { label: 'NUOVOTAKA', path: 'https://nuovotaka.com', icon: <FaLink color={'#999'} />, color1: '#d47aff', color2: '#f6a3f0' },
    { label: 'Privacy', path: '/privacy', icon: <MdPrivacyTip color={'#999'} />, color1: '#80ff72', color2: '#7ee8fa' },
  ]

  return (
    <>
      <h1 className={styles.siteheader}>
        <Link href="/" passHref>
          <a>{AppConfig.site_name}</a>
        </Link>
      </h1>
      <header className={styles.header}>
        <ul>
          {navItems.map(({ label, path, icon, color1, color2 }) => (
            <li style={{'--i': color1, '--j': color2} as ItemCSS} key={label} >
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
    </>
  )
}

export default Header
