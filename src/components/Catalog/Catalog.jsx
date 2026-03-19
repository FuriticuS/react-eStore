import {Product} from "../Product/Product.jsx";

export function Catalog(props) {
  return (
    <main>
      <ul >
        {props.productData.map(products => (
          <Product key={products.id} products={products}/>
        ))}
      </ul>
    </main>
  )
}