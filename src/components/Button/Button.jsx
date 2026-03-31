import PropTypes from 'prop-types';
import styles from './Button.module.css';

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
}

export function Button({title, icon, style, disabled= false, children, onClick}) {
  return(
    <button onClick={onClick} className={`${styles.button} ${disabled ? styles.disabled :''}`} disabled={disabled} style={style}>
      {icon && <img src={icon} alt=""/>}
      {title || children}
    </button>
  )
}