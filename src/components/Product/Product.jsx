export function Product(props) {
  return (
    <li>
      <img src={props.products.photoName} alt=""/>
      <div>
        <h3>{props.products.name}</h3>
        <p>{props.products.description}</p>
        <span>{props.products.price}</span>
      </div>
    </li>
  )
}