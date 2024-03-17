import React, { createContext, useState, useEffect } from "react";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchdata, setsearchdata] = useState(products);
  const [msg, setmsg] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(response);
    };

    fetchProduct();
  }, []);

  const searchHandler = (searchData) => {
    const trimmed = searchData.trim();
    const matched = products.filter((product) =>
      product.title.toLowerCase().includes(trimmed.toLowerCase())
    );
    if (trimmed && matched.length >= 1) {
      setsearchdata(matched);
      setmsg(
        `Found ${matched.length} ${matched.length > 1 ? "products" : "product"}`
      );
    } else {
      setmsg("Not found, please search again");
      setsearchdata([]);
    }
  };
  return (
    <ProductContext.Provider
      value={{ products, searchdata, msg, searchHandler }}
    >
      {children}
    </ProductContext.Provider>
  );
};
