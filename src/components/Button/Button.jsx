import styles from './Button.module.css';

export function Button({title, icon, style, disabled= false, children, onClick}) {
  return(
    <button onClick={onClick} className={`${styles.button} ${disabled ? styles.disabled :''}`} disabled={disabled} style={style}>
      {icon && <img src={icon} alt=""/>}
      {title || children}
    </button>
  )
}