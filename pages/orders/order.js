import React, { useState } from 'react'
import Pricing from './pricing'

const Order = () => {
  const [orders, setOrders] = useState([])
  const [pricin, setPricin] = useState(false)
  const [total, setTotal] = useState(0)
  const [available, setavailable] = useState([
    {
       name:"butter panner",
       price:"550",
       s:0
    },
    {
      name:"pulav",
      price:"340",
      s:0
    },
    {
      name:"masala dosa",
      price:"300",
      s:0
    },
    {
      name:"idly",
      price:"300",
      s:0
    }
  ])

  function handleSelect(food,i) {
    if(food.s==0){
     
     setOrders([...orders,food])
     food.s = 1;
     setTotal(total+parseInt(food.price))
    }
    else{
      food.s = 0;
      let temp = [...orders];
      temp.splice(i, 1);
      setTotal(total-parseInt(food.price))
      setOrders(temp)
      temp=[]
    }
  }
  
  function handleRemove(food,i) {
      let temp = [...orders];
      temp.splice(i, 1);
      food.s = 0;
      setTotal(total-parseInt(food.price))
      setOrders(temp)
      temp=[]
  }
  return (
    <div>
      {!pricin?
      
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">Choose what you want</h1>
            
          </div>
          <div class="flex flex-wrap -m-4">
            {available.map((food,i )=>{
            return <div class="lg:w-1/3 sm:w-1/2 p-4 " style={{background : food.s==1?"green":"none"}}>
              <div onClick={()=>{handleSelect(food,i)}} class="flex relative " >
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{food.name}</h1>
                  <p class="leading-relaxed">{food.price}</p>
                </div>
              </div>
            </div>
            
            })}
          </div>
          
        </div>
    
   
<div className="w-screen flex justify-center">

<button onClick={()=>{setPricin(true)}}  className='bg-red-500 pb-2 mb-10 w-80 pt-1 text-white font-bold px-4 rounded-lg hover:text-red-500 hover:bg-white'>next</button>
</div>
</section >
:
<Pricing orders={orders} handleRemove={handleRemove} total={total} setPricin={setPricin}/>
}
    </div >
  )
}

export default Order