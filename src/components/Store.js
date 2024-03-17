import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Productitems from "./Productitems";
import { ProductContext } from "../context/ProductContext";

const Store = () => {
  const { products, searchdata } = useContext(ProductContext);
  const displayedProducts = searchdata.length > 0 ? searchdata : products;

  return (
    <>
      <h1 className="text-center my-3">Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {displayedProducts.map((item) => (
          <Col key={item.item}>
            <Productitems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
