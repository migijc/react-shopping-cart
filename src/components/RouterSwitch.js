import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from "react"
import HomePage from "./HomePage"
import Products from "./Products"
import Header from "./Header"
import ShoppingCart from "./ShoppingCard"
import Footer from "./Footer"



export default function RouterSwitch(){
    const [items, setItems] = useState([])


  
    function handleState(e){
        setItems((oldArray)=>{
            return [...oldArray, e.target.dataset]
        })
    }

    function addOne(e){
        setItems((prevItems)=>{
            return [...prevItems, e.target.dataset]
        })
    }

    function removeOne(e){
        let copy=[...items]
        let returnArray=[]
        let index=0
        copy.forEach(item=>{
            if(item.name===e.target.dataset.name){
                return index=copy.indexOf(item)
            }
        })
      copy[index]=null
      copy=copy.filter((item)=> item !== null)
        console.log(returnArray)
        setItems(()=>{
            return copy
        })
    }


    return(
        <BrowserRouter>
            <Header totalItems={items.length}/>
                <Routes>
                    <Route path="react-shopping-cart" element={<HomePage/>}/>
                    <Route path="products" element={<Products handleAddClick={handleState}/>}/>
                    <Route path="shoppingcart" element={<ShoppingCart total={items} handleAddOne={addOne} handleRemoveOne={removeOne}/>}/>
                </Routes>
            <Footer/>

        </BrowserRouter>
    )
}