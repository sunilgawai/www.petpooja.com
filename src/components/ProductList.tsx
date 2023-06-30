import { useAppContext } from "../context";
import Product from "./Product";

const ProductList = () => {
  const { products } = useAppContext();


  return (
    <div className="tab-content p-3 border bg-light" id="nav-tabContent">
      <div className="tab-pane w-100 fade active show" id="nav-cakes" role="tabpanel" aria-labelledby="nav-cakes-tab">
        <div className="item-list">
          <ul>
            {
              products.map((product) => <Product product={product} key={product.Item_Code} />)
            }
            {
              products.map((product) => <Product product={product} key={product.Item_Code} />)
            }
            {
              products.map((product) => <Product product={product} key={product.Item_Code} />)
            }
            {
              products.map((product) => <Product product={product} key={product.Item_Code} />)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductList;