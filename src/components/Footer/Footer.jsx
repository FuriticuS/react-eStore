import style from './Footer.module.css'
import {useState} from "react";

export function Footer() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  function toggle(){
    setIsOpen(prev => !prev)
  }

  return (
    <footer className={style.footer}>
      {!isOpen ? <button onClick={toggle}>Начать</button> : <span className={style.cross} onClick={toggle}>&times;</span>}

      {isOpen &&
        <>
          <h1>Vite + React = {count >= 3 ? 'LOVE' : ''}</h1>

          <div className={style.logoContainer}>
            <img src="/vite.svg" className={`${style.logo} ${count>=1 ? style.active:""}`} alt="Vite logo"/>
            <p>+</p>
            <img src="/react.svg" className={`${style.logo} ${count>=2 ? style.active:""}`} alt="React logo"/>
            <p>=</p>
            <img src="/love.svg" className={`${style.logo} ${count>=3 ? style.active:""}`} alt="Love logo"/>
          </div>

          <hr/>

          <div className={style.card}>
            <p className={style.countParagraph}>count is {count}</p>
            <div className={style.incrementButtons}>
              <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
              <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        </>
      }
    </footer>
  )
}