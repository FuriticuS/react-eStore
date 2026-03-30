import style from './Footer.module.css'
import {useState} from "react";
import {Button} from "../Button/Button.jsx";

export function Footer() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [itemImg, setItemImg] = useState(null)

  function toggle(){
    setIsOpen(prev => !prev)
  }

  return (
    <footer className={style.footer}>
      {!isOpen ? <Button onClick={toggle} title={'Начать'} /> : <span className={style.cross} onClick={toggle}>&times;</span>}

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
              <Button onClick={() => setCount((prev) => prev + 1)}>+1</Button>
              <Button onClick={() => setCount((prev) => prev - 1)}>-1</Button>
              <Button onClick={() => setCount(0)}>Reset</Button>
            </div>
          </div>
        </>
      }
    </footer>
  )
}