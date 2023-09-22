import Image from "next/image";
import styles from './page.module.css';
import Hero from "public/images/hero.svg" // #4EC772
import { Montserrat} from 'next/font/google';
import Button from "@/components/Button/Button";
const LogoFont2 = Montserrat({subsets: ['latin'], weight:['900']});
export default function Home() {
  return (
    <div className={`${styles.container} ${LogoFont2.className}`}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your one-stop Shop destination!</h1>
        <p className={styles.description}>Discover world of endless shopping possibilities at our online store,Browse,choose amd order your favorite products from the comfort of your home</p>
        <Button padding = "20px">shop now</Button>
      </div>
      <div className={styles.col}>
        <Image 
        src={Hero}
        className={styles.img}
        alt="Fox4Shop"
        />
      </div>
    </div>
  )
}
