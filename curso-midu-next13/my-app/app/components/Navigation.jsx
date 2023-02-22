import Link from 'next/link'
import styles from './Navigation.module.css'

const pages = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Posts', route: '/posts' }

]

export default function Navigation () {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {pages.map(({ label, route }) => (<li key={route}><Link href={route}>{label}</Link></li>))}
      </ul>
    </nav>
  )
}
