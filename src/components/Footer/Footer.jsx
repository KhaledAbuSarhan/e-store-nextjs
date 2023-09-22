import Image from "next/image"
import styles from './Footer.module.css'
import Icons from "./Icons"
export default function Footer() {
    return (
        <div className={styles.container}>
        <div>©2023 Fox4Shopping. All right reserved</div>
        <div className={styles.social}>
        {
            Icons.map((icon) => (
                <Image
                key={icon.id}
            className={styles.icon}
            src={icon.url}
            width={20}
            height={20}
            alt={icon.alter}
        />      
            ))
        }     
        </div>
        </div>
    )
}
