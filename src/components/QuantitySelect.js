export default function QuantitySelect(props){

    return(
        <div className="quantitySelector">
            <button onClick={props.handleRemoveOne} className="removeOne" data-name={props.name}>-</button>
            <input className="currentQuantity" type="phone" placeholder={props.quantity}></input>
            <button onClick={props.handleAddClick}  data-name={props.name} data-price={props.price} className="addOne">+</button>
        </div>
    )

}