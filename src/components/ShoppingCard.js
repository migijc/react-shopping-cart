import {useState, useEffect} from "react"
import QuantitySelect from "./QuantitySelect"

export default function ShoppingCart(props){
    const [itemsAndQuantity, setItemsAndQuantitiy] = useState(props.total)

    function check(arr,newItem){
        if(arr.length<0){
            return false
        }
        let returnItem=false
        arr.forEach(item=>{
            if(item.name === newItem.name){
                returnItem=true
            }
        })
        return returnItem
    }

    //updates itemsAndQuantity if any item has a data-set quantity of >1
    useEffect(()=>{
        let updatedList=[]
        itemsAndQuantity.forEach(item =>{
            if(check(updatedList, item) === false){
                let newItem={
                    name: item.name,
                    price:item.price,
                    url:item.url,
                    quantity:1
                }
                updatedList.push(newItem)
            } else{
                updatedList.forEach(inArray=>{
                    if(inArray.name===item.name){
                        inArray.quantity=inArray.quantity + 1
                    }
                })
            }  
        })
        setItemsAndQuantitiy(updatedList)
        
    }, [])

    function displayItemsInCart(){
        let listOfItems=[]
        itemsAndQuantity.forEach(item=>{
            let newItem= (
                <div className="wholeBag" key={Math.random()}>
                    <div className="productInBagContainer">
                        <img className="inBagImage" src={item.url} alt="A Product"/>
                        <div className="inBagCenterSec">
                            <p className="inBagItemName">{item.name}</p>
                            <QuantitySelect quantity={item.quantity}/>
                        </div>
                        <p className="totalPerItem">${(item.price * item.quantity)}</p>
                    </div>
                </div>
            )
            listOfItems.push(newItem)
        })
        return listOfItems
    }

    return (
        <div className="shoppingCartContainer">
            <h1 className="cartPageTitle">Shopping Cart</h1>
            <div className="allItems">
                {displayItemsInCart()}
            </div>
        </div>
    )
}