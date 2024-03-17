import React,{useContext} from 'react'
import { Offcanvas,Stack } from 'react-bootstrap';
import { useShoppingCart } from "../context/Shoopingprovider"
import CartItem from "../components/CartItem"
import { ProductContext } from '../context/ProductContext';
const Cartmenu = ({ open }) => {
  const { products } = useContext(ProductContext);
    const { cartItem,closecart } = useShoppingCart();
  return (
      <Offcanvas show={open} onHide={closecart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {
              cartItem.reduce((total, cartItem) => {
                const item = products.find((i) => i.id === cartItem.id);
                return (total + (item?.price || 0) * cartItem.quantity);
              }, 0)
            }
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Cartmenu;