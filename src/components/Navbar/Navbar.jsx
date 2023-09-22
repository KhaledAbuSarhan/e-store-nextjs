import  Link  from 'next/link';
import styles from './Navbar.module.css';
import links from './data';
import Button from '../Button/Button';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import {Montserrat} from 'next/font/google';
const LogoFont = Montserrat({subsets: ['latin'], weight: ['600']});

export default function Navbar() {
    return (
        <div className={styles.container}>
        <Link href="/" className={`${styles.logo}`}>Fox4Shopping</Link>
        <div className={styles.links}>
        <DarkModeToggle/>
        {
            links.map((link) => (
                <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
            ))
        }
        <Button>logout</Button>
        </div>
        </div>
    )
}
