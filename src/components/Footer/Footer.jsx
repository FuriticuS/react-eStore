import style from './Footer.module.css'
import {useState} from "react";

export function Footer() {
  const [count, setCount] = useState(0)

  return (
    <footer className={style.footer}>
      {/* <span className="cross">&times;</span> */}
      {/* <button>Начать</button> */}

      <h1>Vite + React = Love</h1>

      {/* <div className="logoContainer">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <p>+</p>
        <img src="/react.svg" className="logo" alt="React logo" />
        <p>=</p>
        <img src="/love.svg" className="logo" alt="Love logo" />
      </div> */}

      <hr />

      <div className="card">
        <p className="countParagraph">count is {count}</p>
        <div className="incrementButtons">
          <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
          <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>

    </footer>
  )
}