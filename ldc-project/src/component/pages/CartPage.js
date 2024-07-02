import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { MdAddShoppingCart } from "react-icons/md";

const CartDropdown = ({ cartItems, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="relative">
      {/* Cart icon with count badge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center    mt-1  h-8 lg:h-12 w-[2rem]"
      >
        <img
          src="https://www.phadkelabs.com/public/Frontend/images//icons/cart.svg"
          alt="Cart Icon"
          className="h-full w-full mt-4 mr-4"
        />
        {/* Display count of items in badge */}
        <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-2 py-1">
          {cartItems.length}
        </span>
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute right-[-5rem] ease-in-out duration-500  w-[20rem]  md:w-[30.2rem]   lg:right-[-10rem]    mt-5    lg:mt-8 text-white   lg:w-[25rem] p-5 bg-[#2f446e] border border-gray-300 shadow-lg rounded">
          {/* Total payment */}
          <div className="flex justify-between  border-b-[3px] border-white ">
            <div className="flex gap-2   ml-3">
              {/* <img
                src="https://www.phadkelabs.com/public/Frontend/images//icons/cart.svg"
                alt="Cart Icon"
                className="h-[30px] w-[30px] text-white "
              /> */}
              <MdAddShoppingCart className="h-[30px] w-[30px] text-white " />

              <p className="font-bold text-lg">Cart</p>
            </div>

            <div className="px-4 py-2  ">
              <span className="font-bold  text-lg"> Cart Total:</span>
              <span className="ml-2">Rs.{totalPrice}</span>
            </div>
          </div>
          {/* Cart items */}
          {cartItems.length > 0 ? (
            <div className="overflow-y-auto max-h-[200px]">
              {/* Display only five products */}
              {cartItems.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between px-4 py-3 border-b border-white"
                >
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-white"> - Rs.{item.price}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-white"
                  >
                    <TfiClose />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className=" mt-2   py-4  text-xl">Cart is empty</p>
          )}
          {/* Checkout and Proceed buttons */}
          <div className="flex justify-center gap-5  mt-0 border-t-2 border-white  px-4 py-2">
            <button className="bg-blue-500 text-white px-4 py-2  mt-3 rounded">
              Add More
            </button>
            <button className="bg-green-500 text-white px-4 py-2  mt-3 rounded">
              Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="flex justify-center items-center ">
      <CartDropdown cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
