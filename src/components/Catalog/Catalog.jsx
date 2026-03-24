import {Product} from "../Product/Product.jsx";
import style from "./Catalog.module.css"

export function Catalog({productData}) {
  return (
    <main className={style.catalog}>
      <ul className={style.products}>
        {productData.map(products => (
          !products.soldOut && <Product key={products.id} products={products}/>
        ))}
      </ul>
    </main>
  )
}