import styles from "@/Components/Header/Header.module.css"
import Link from "next/link"

export default function Header(){
  return (
    <>
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Welcome To PP</h1>


    </header>
    </>
  )
}