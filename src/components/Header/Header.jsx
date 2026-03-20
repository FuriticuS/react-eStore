import {useEffect, useState} from "react";
import styles from './Header.module.css';

export function Header(){
  const date = new Date();
  const [time, setTime] = useState(date);

  const hourNow = date.getHours()
  const openStore = 8
  const closeStore = 18
  const isOpen = hourNow >= openStore && hourNow < closeStore;

  useEffect(() => {
    const intervalTime = setInterval(() => setTime(date), 1000)
    return () => clearInterval(intervalTime)
  })

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <h1 className={styles.title}>Electronics store</h1>
        <p className={styles.workingHours}>
          {isOpen ?
            `Store open! The store will close in ${closeStore - hourNow} hours.`
            : `Store close! The store will open in ${hourNow - openStore} hours.`}

          <span> | {time.toLocaleTimeString('ru-RU')} {time.toLocaleDateString('ru-RU')}</span>
        </p>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li key='Home'><a href="">Home</a></li>
          <li key='Catalog'><a href="">Catalog</a></li>
          <li key='About Us'><a href="">About Us</a></li>
          <li key='Contacts'><a href="">Contacts</a></li>
        </ul>
      </nav>
    </header>
  )
}