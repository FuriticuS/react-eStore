import style from './Footer.module.css'
import {useState} from "react";

export function Footer() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [itemImg, setItemImg] = useState(null)

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
            <img src="/vite.svg" className={`${style.logo} ${count>=1 || itemImg === 'vite' ? style.active:""}`} alt="Vite logo" onMouseEnter={() => setItemImg('vite')} onMouseLeave={() => setItemImg(null)}/>
            <p>+</p>
            <img src="/react.svg" className={`${style.logo} ${count>=2 || itemImg === 'react' ? style.active:""}`} alt="React logo" onMouseEnter={() => setItemImg('react')} onMouseLeave={() => setItemImg(null)}/>
            <p>=</p>
            <img src="/love.svg" className={`${style.logo} ${count>=3 || itemImg === 'love' ? style.active:""}`} alt="Love logo" onMouseEnter={() => setItemImg('love')} onMouseLeave={() => setItemImg(null)}/>
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