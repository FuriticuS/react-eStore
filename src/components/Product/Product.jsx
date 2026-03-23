import style from './Product.module.css';

export function Product({products}) {
  return (
    <li className={style.product}>
      <img src={products.photoName} alt=""/>
      <div>
        <h3>{products.name}</h3>
        <p>{products.description}</p>
        <span>{products.price}</span>
      </div>
    </li>
  )
}