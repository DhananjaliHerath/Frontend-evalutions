
import React, { useEffect, useState } from "react";
import Productdata from "./Prouctdata";
import { Cartpage } from "./Cart page";



export const HomePage = () => {

    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
      };
      

      const handleDeleteFromCart = (item) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
      }
      const handleUpdateQuantity = (item, quantity) => {
        const updatedCartItems = [...cartItems];
        const index = updatedCartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (index >= 0) {
          updatedCartItems[index] = { ...updatedCartItems[index], quantity: quantity };
          setCartItems(updatedCartItems);
        }
      };


      const [name, setName] = useState('');
      const [address, setAddress] = useState('');
      const [paymentMethod, setPaymentMethod] = useState('VISA');
      const [cardNumber, setCardNumber] = useState('');
      const [totalCost, setTotalCost] = useState(0);
      const handleSubmit = () => {
        // Save the form data to localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('address', address);
        localStorage.setItem('paymentMethod', paymentMethod);
        localStorage.setItem('cardNumber', cardNumber);
        localStorage.setItem('totalCost', totalCost);
      };
    


    const data = [
        {
            id: 1,
            name: "Classic T-Shirt",
            image: "https://m.media-amazon.com/images/I/71W9NnIygUL._UX679_.jpg",
            price: 199.99,
          },
          {
            id: 2,
            name: "Hugo Boss",
            image: "https://fragrances.com.ng/media/catalog/product/cache/4cf9e516177489ae500dec59d26ccb3b/1/4/148_48194794_1_1.jpg",
            price: 399.99,
          },
          {
            id: 3,
            name: "Sneakers",
            image: "https://sothebys-com.brightspotcdn.com/dims4/default/282b048/2147483647/strip/true/crop/720x543+0+0/resize/684x516!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F12%2F5f%2F2a6508d34150a581146583594141%2Fred.jpg",
            price: 599.99,
          },
          {
            id: 4,
            name: "Gold Violin",
            image: "https://www.shutterstock.com/image-illustration/golden-violin-bow-symbol-high-260nw-88367212.jpg",
            price: 244.99,
          },


     
    ];
   
    return (
    
        <div>
     <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">

      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-500"> Everydaymarket Ecommerce Solution</h1>
   
    </div>
    <div class="flex flex-wrap">
    {data.map((item) => (
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-600 border-opacity-60">
    
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{item.name}</h2>
        <p class="leading-relaxed text-base mb-4">{item.id}</p>
        <p class="leading-relaxed text-base mb-4">{item.name}</p>
        <img src={item.image} alt={`Image ${item.id}`} />
        
        <button class="h-12 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleAddToCart(item)}>cart</button>


      </div>  
        ))}
    </div>
  </div>
</section> 



<body class="bg-gray-100">
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
     
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>

        {cartItems.map((item) => (
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-20">
            <img src={item.image} alt={`Image ${item.id}`} />
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{item.name}</span>
              <span class="text-red-500 text-xs">{item.id}</span>
              <button onClick={() => handleDeleteFromCart(item)}>Delete</button>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input
                type="number"
                min="1"
                defaultValue="1"
                onChange={(event) =>
                  handleUpdateQuantity(item, event.target.value)
                }/>

            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">{item.price}</span>
          <span class="text-center w-1/5 font-semibold text-sm">{item.price * item.quantity}</span>
          <button >Submit</button>
        </div>

))}



    
       
      </div>
    
      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-2 mb-5">
         
        </div>
      
        <div class="py-3">
          
          <input type="text" id="promo" placeholder="Enter your Name" class="p-2 text-sm w-full"value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div class="py-3">
          
          <input type="text" id="promo" placeholder="Enter your Address" class="p-2 text-sm w-full" onChange={(e) => setAddress(e.target.value)} />
        </div>
        

        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>Payment Method</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>VISA</option>
            <option>MASTER</option>
          </select>
          <div class="py-3">
          
          <input type="text" id="promo" placeholder="Enter your card number" class="p-2 text-sm w-full"value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
        </div>
        </div>
      
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
          
          </div>
          <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"onClick={handleSubmit}>Checkout</button>
        </div>
      </div>

    </div>
  </div>
</body>

     </div>
    );
};