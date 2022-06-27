import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props){
// console.log(props.products);   
   return(
<div className="productGrid">
    <div className="container">
        <h3>Best Selling Products</h3>
        <div className="grid">

           {props.products.map((product) =>
           <ProductCard 
           productId={product.id}
           product = {product}
           />
           )}
           {!props.products.length ?(
            <div className="card">
                <p>No products available</p>
            </div>
           ): null}
        </div>
    </div>
    
</div>
   )
   
}