import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


export default function Products(props){
    const [product1, setProduct1] =useState('')
    const [shouldRender, setShouldRender] = useState(false)
    

        //note for future reference, if accepting prop from parent to then agian
        //pass it down to a chile like <ProductCard>, we need to define a vaiable
        //& make it === the prop, then pass the new variable as prop.
       let handleAddButton= props.handleAddClick

        useEffect(()=>{
            console.log(product1)
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'c7dc2a882emsh73eeb94c5e99567p187390jsn70735e247a47',
                    'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
                }
            };
            
            fetch('https://magic-aliexpress1.p.rapidapi.com/api/bestSales/SortedByNewest?limit=10', options)
                .then(response => response.json())
                .then(
                    response => {
                        let allItems=[]
                        for(let props in response){
                            let newCard = <ProductCard
                            handleButton={handleAddButton}
                            productName={response[props].product_title}
                            productImage={response[props].product_main_image_url}
                            productPrice={response[props].sale_price}
                            key={+props}
                            />
                            allItems.push(newCard)
                            setProduct1(allItems)
                            setShouldRender(true)

                        }
                    }
                )
                .catch(err => console.error(err));

        }, [])

        function displayProducts(){
            product1.forEach(product=>{
                return product
            })
        }
    
        if(shouldRender === true){
            return (
                <div className="productsPageContainer">
                    <h1 className="productsPageTitle">Our Products</h1>
                    <div className="productsDisplay">
                    {product1}
                    </div>
                </div>
         
            )
        }

}
