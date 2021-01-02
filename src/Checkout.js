import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/images/A20M_blue_OG._CB1543638133_.png'
          alt=''
          className='checkout__ad'
        />
        <div className='checkout__title'>
          <h3>Hello, {user ? user?.email : "Guest"}</h3>
          <h2>Your Shopping list goes in here</h2>
          {basket?.map((item) => (
            <div className='checkout__checkout__product'>
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='checkout__right'>
        {/* <h2>The subtotal will go here</h2> */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
