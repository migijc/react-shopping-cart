import {BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from "react"
import HomePage from "./HomePage"
import Products from "./Products"
import Header from "./Header"
import ShoppingCart from "./ShoppingCard"


export default function RouterSwitch(){
    const [items, setItems] = useState([])


  
    function handleState(e){
        e.target.setAttribute("data-quantity", `${+e.target.dataset.quantity + 1}`)
        setItems((oldArray)=>{
            return [...oldArray, e.target.dataset]
        })
    }


    return(
        <BrowserRouter>
        <Header totalItems={items.length}/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="products" element={<Products handleAddClick={handleState}/>}/>
                <Route path="shoppingcart" element={<ShoppingCart total={items}/>}/>
            </Routes>
        </BrowserRouter>
    )
}