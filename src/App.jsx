import {Header} from "./components/Header/Header.jsx";
import {Catalog} from "./components/Catalog/Catalog.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import {productData} from "./data/ProductData.js";

function App() {
  return (
    <>
      <Header />
      <Catalog productData={productData}/>
      <Footer />
    </>
  )
}

export default App
