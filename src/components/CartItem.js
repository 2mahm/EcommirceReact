import React, { useContext } from "react";
import { useShoppingCart } from "../context/Shoopingprovider";
import { Stack, Button } from "react-bootstrap";
//import productdata from "../models/productdata.json"
import { ProductContext } from "../context/ProductContext";

const CartItem = ({ id, quantity }) => {
  const { products } = useContext(ProductContext);
  const item = products.find((i) => i.id === id);
  const { removeitem } = useShoppingCart();
  if (item == null) {
    return null;
  }
  return (
    <Stack direction="horizontal" gap={2} className="">
      <div style={{ width: "100px", height: "75px" }}>
        <img
          src={item.image}
          alt="cart-img"
          style={{ width: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="me-auto" style={{ width: "25rem", marginLeft: "20px" }}>
        <div style={{ marginleft: "22px" }}>
          <span> {item.title} </span>
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {item.price}
        </div>
      </div>
      <div>{`${item.price * quantity}$`}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeitem(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};
export default CartItem;
