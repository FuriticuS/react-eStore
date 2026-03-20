import {useEffect, useState} from "react";

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
    <header>
      <h1>Electronics store</h1>
      <ul>
        <li key='Home'>Home</li>
        <li key='Catalog'>Catalog</li>
        <li key='About Us'>About Us</li>
        <li key='Contacts'>Contacts</li>
      </ul>
      <p>
        {isOpen ?
          `Store open! The store will close in ${closeStore - hourNow} hours.`
          : `Store close! The store will open in ${hourNow - openStore} hours.`}

        <span> | {time.toLocaleTimeString('ru-RU')} {time.toLocaleDateString('ru-RU')}</span>
      </p>
    </header>
  )
}