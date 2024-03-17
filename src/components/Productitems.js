import Button from 'react-bootstrap/Button';
import React from 'react';
import { useShoppingCart } from '../context/Shoopingprovider';
import Card from 'react-bootstrap/Card';
//import { ProductContext } from '../context/ProductContext';

function Mycards({ id, title, price, image }) {
  const { getitems, add1, decr1, removeitem } = useShoppingCart();
  const quantity = getitems(id);
  
  return (
    <Card >
      <div style={{ marginTop: "16px", height: "20rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card.Img variant="top" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} src={image} />
      </div>
      <Card.Body style={{ height: "50%" }}>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-3" style={{ width: "20rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow:"ellipsis"}}>{title}</span>
          <span className="text-muted me-2">{`${price}$`}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => add1(id)}>
              Add To Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem" }}>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: "0.5rem" }}>
                <Button onClick={() => decr1(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity} in cart</span>
                </div>
                <Button onClick={() => add1(id)}>+</Button>
              </div>
              <Button variant="danger" size="sm" onClick={() => removeitem(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Mycards;