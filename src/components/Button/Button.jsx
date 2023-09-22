"use client"
import styles from './button.module.css'
import { useContextProvider } from '@/context/ThemeContext'

const Button = ({children, padding}) => {
  const {mode} = useContextProvider()
  return (
    <button
    className={`${styles.button}`}
    style={mode === "dark" ? {color: '#111', padding: padding}:{color: "#fff",padding: padding}}
    onClick={() => {}}
    >
        {children}
    </button>
  )
}

export default Button