"use client"
import styles from './DarkModeToggle.module.css';
import { useContextProvider } from '@/context/ThemeContext';
const DarkModeToggle = () => {
    const {mode, toggle} = useContextProvider();

return (
    <div className={styles.container}>
        <div className={styles.icon}>🔆</div>
        <div className={styles.icon}>🌑</div>
        <div className={styles.switcher} onClick={toggle}
            style={mode === "light"  ? {left: "2px"} : {right: "2px"}}
        />
    </div>
)
}

export default DarkModeToggle