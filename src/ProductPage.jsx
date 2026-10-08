import { useState } from "react"

function ProductPage() {



    let [product,SetProduct]=useState([])

    const FetchData=async()=>{
      let res=await  fetch("https://fakestoreapi.com/products")

      let data=await res.json()


      SetProduct(data)
    }


  return (
    <div>
      <h1 >product page</h1>
      <button onClick={FetchData}>click</button>



{
    product.map(item=><div>
            <h1>{item.title}</h1>
            <img src={item.image} alt="" height={80}/>
            <h5>{item.price}</h5>
    </div>)
}

     
    </div>
  )
}

export default ProductPage
