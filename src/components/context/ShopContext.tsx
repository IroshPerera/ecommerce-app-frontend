import { createContext, ReactNode, useEffect, useState } from 'react';
import { products } from '../../assets/data';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export const ShopContext = createContext({});


const ShopContextProvider = (props: any) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const currency = '$';
  const deliveryCost = 10;
  const [cartItems, setCartItems] = useState<any>({});


  const addToCart = async (productId: any, color: any) => {
    if (!color) {
      toast.error("Please select a color");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[productId]) {
      if (cartData[productId][color]) {
        cartData[productId][color] += 1;
      } else {
        cartData[productId][color] = 1;
      }
    } else {
      cartData[productId] = {};
      cartData[productId][color] = 1;
    }
    setCartItems(cartData);


  }

  const getCartCount = () => {
    let totalCount = 0;
    for (let products in cartItems) {
      for (const product in cartItems[products]) {
        try {
          if (cartItems[products][product] > 0) {
            totalCount += cartItems[products][product];
          }

        } catch (e) {
        }
      }
    }

    return totalCount;
  }

  const updateQuantity = async (id: any, color: any, quantity: any) => {
    let cartData = structuredClone(cartItems);
    cartData[id][color] = quantity;
    setCartItems(cartData);
  }

  const getCartAmount = () => {
    let totalAmount = 0;
    for (let items in cartItems) {
      let itemInfo:any = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (e) {
        }
      }
    }
    return totalAmount;
  }

  useEffect(() => {
    console.log("cartItems", cartItems);
  }, [cartItems]);


  const value = { products, search, setSearch, currency, deliveryCost, cartItems, addToCart, navigate, getCartCount, updateQuantity,getCartAmount };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextProvider;
