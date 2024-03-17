import { createContext, useContext, useState } from "react";
import Cartmenu from "../components/Cartmenu";
//import { Await } from "react-router-dom";
const SearchContext=createContext({});


const SearchProvider = ({ children }) => {
    const [cartItem, S_cartItem] = useState([]);
    const [open, S_open] = useState(false);
    const opencart = () => {
        S_open(true);
    }
    const closecart = () => {
        S_open(false);
    }
     const cquantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
    const getitems = (id) => {
        return cartItem.find((item) => item.id === id)?.quantity || 0;
    };
    const add1 = (id) => {
        S_cartItem((cartItem) => {
           if (cartItem.find(item => item.id === id) == null) {
            return[...cartItem, {id, quantity: 1}]
           } else {
               return cartItem.map((item)=> {
                   if (item.id === id) {
                       return { ...item, quantity: item.quantity + 1 }
                   } else {
                       return item;
                   }
               })
           }
       })
    };  
    const decr1 = (id) => {
        S_cartItem((cartItem) => {
           if (cartItem.find(item => item.id === id) === 1) {
               return cartItem.filter((item) => item.id !== id)
           } else {
               return cartItem.map((item)=> {
                   if (item.id === id) {
                    return {...item ,quantity: item.quantity - 1}
                   } else {
                       return item;
                   }
               })
           }
       })
    };
    // const removeitem = (id) => {
    //     S_cartItem((cartItem) => {
    //         cartItem.filter((item) => item.id !== id)
    //     })
    // };
     const removeitem = (id) => {
    S_cartItem((cartItem) => cartItem.filter((item) => item.id !== id));
  };
  return (
    <SearchContext.Provider value={{cartItem,getitems,add1,decr1,cquantity,removeitem,opencart,closecart}} >
        {children}
          <Cartmenu open={open} />
        </SearchContext.Provider>
  )
}
export default SearchProvider;


export const useShoppingCart = () => {
  return useContext(SearchContext);
};
