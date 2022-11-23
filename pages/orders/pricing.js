import React from 'react'

const Pricing = ({orders , handleRemove,total,setPricin}) => {
  return (
    <div>
<div class="text-gray-100 bg-transparent my-20">
    <div class="p-4 flex my-5 justify-between">
        <h1 class="text-3xl font-extrabold">
            Bill
        </h1>
        <button onClick={()=>{setPricin(false)}} type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Add item</button>
    </div>
    <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md shadow-md rounded mb-4">
            <tbody>
                <tr class="border-b bg-neutral-800">
                    <th class="text-left p-3 px-5">Name</th>
                    <th class="text-left p-3 px-5">price</th>
                    <th></th>
                </tr>
                {orders.map((f,i)=>{
        return <tr key={f.name} class="border-b hover:bg-red-400 bg-neutral-800">
                    <td class="p-3 px-5">{f.name}</td>
                    <td class="p-3 px-5">{f.price} &#8377;</td>
                    <td class="p-3 px-5 flex justify-end"><button onClick={()=>{handleRemove(f,i)}} type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">remove</button></td>
                </tr>
              })}
              <tr class="border-b hover:bg-red-500 bg-neutral-800">
                    <td class="p-3 px-5">total</td>
                    <td class="p-3 px-5">{total} &#8377;</td>
                    <td class="p-3 px-5 flex justify-end"></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div className="w-screen flex justify-center">

<button className='bg-red-500 pb-2 mb-10 w-80 pt-1 text-white font-bold px-4 rounded-lg hover:text-red-500 hover:bg-white'>Confirm order</button>
</div>
    </div>
  )
}

export default Pricing