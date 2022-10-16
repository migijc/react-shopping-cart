export default function QuantitySelect(props){

    return(
        <div className="quantitySelector">
            <button className="removeOne">-</button>
            <input className="currentQuantity" type="phone" placeholder={props.quantity}></input>
            <button className="addOne">+</button>
        </div>
    )

}