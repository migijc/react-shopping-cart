export default function ProductCard(props){
       
    return(
        <div className="productCard">
            <img className="displayImage" src={props.productImage} alt="A Product"/>
            <div className="productDetails">
                <p className="itemName">{props.productName}</p>
                <p className="price">{props.productPrice}</p>
                <button 
                    onClick={props.handleButton} 
                    data-url={props.productImage}
                    data-price={props.productPrice}
                    data-name={props.productName} 
                    className="addToBagButton"
                >Add to cart</button>
            </div>
        </div>
    )
}

