export function Header(){
  const date = new Date();
  return (
    <header>
      <h1>Electronics store</h1>
      <ul>
        <li key='Home'>Home</li>
        <li key='Catalog'>Catalog</li>
        <li key='About Us'>About Us</li>
        <li key='Contacts'>Contacts</li>
      </ul>
      <p>{date.toLocaleString()}</p>
    </header>
  )
}