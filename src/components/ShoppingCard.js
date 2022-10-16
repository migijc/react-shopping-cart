import {useState, useEffect} from "react"
import QuantitySelect from "./QuantitySelect"

export default function ShoppingCart(props){
    let display
    let handleAdd=props.handleAddOne
    let handleRemove= props.handleRemoveOne
    let priceNotTaxed



    function check(arr,newItem){
        if(arr.length===0){
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

    function getTotalNotTaxed(){
        let start=0
        props.total.forEach(item=>{
            start+= +item.price
        })
        return priceNotTaxed = start
    }

    function updateOnRender(){
        let updatedList=[]
        props.total.forEach(item =>{
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
        getTotalNotTaxed()
        display=updatedList
    }

   updateOnRender()
 
    function displayItemsInCart(){
        let listOfItems=[]
        display.forEach(item=>{
            let newItem= (
                <div className="wholeBag" key={Math.random()}>
                    <div className="productInBagContainer">
                        <img className="inBagImage" src={item.url} alt="A Product"/>
                        <div className="inBagCenterSec">
                            <p className="inBagItemName">{item.name}</p>
                            <QuantitySelect quantity={item.quantity} handleAddClick={handleAdd} handleRemoveOne={handleRemove} price={item.price} name={item.name}/>
                        </div>
                        <p className="totalPerItem">${(item.price * item.quantity).toFixed(2)}</p>
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
            {PaymentSection(props.total.length, +priceNotTaxed.toFixed(2))}
        </div>
    )
}

function PaymentSection(totalItems, preTaxPrice){
     let thisSalesTax=preTaxPrice * 0.07
     let totalPrice=preTaxPrice+thisSalesTax

    return (
        <div className="paymentSection">

            <div className="summaryTitleContainer">
                <h2>Order Summary</h2>
                <hr/>
            </div>

            <div className="summaryMidSec">
                <div className="orderTotalContainer">
                    <p>Total items:</p>
                    <p>Price:</p>
                    <p>Tax:</p>
                    <hr/>
                    <p className="sumTotalPrice">Total Price:</p>
                </div>
                
                <div className="allPricesDiv">
                    <p className="sumTotalItems">{totalItems}</p>
                    <p className="sumPrice"> {preTaxPrice.toFixed(2)}</p>
                    <p className="sumTax"> {thisSalesTax.toFixed(2)}</p>
                    <hr/>
                    <p className="sumTotalPrice">{totalPrice.toFixed(2)}</p>
                </div>
            </div>


            <button onClick={()=> alert("This is not a real store")}className="toPaymentButton">Pay Now</button>
        </div>
    )
}
