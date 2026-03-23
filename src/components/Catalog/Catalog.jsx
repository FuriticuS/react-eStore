import {Product} from "../Product/Product.jsx";
import style from "./Catalog.module.css"

export function Catalog(props) {
  return (
    <main className={style.catalog}>
      <ul className={style.products}>
        {props.productData.map(products => (
          <Product key={products.id} products={products}/>
        ))}
      </ul>
    </main>
  )
}