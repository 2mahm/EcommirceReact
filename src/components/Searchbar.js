import React,{useContext,useState} from 'react';
import { ProductContext } from '../context/ProductContext';
import {Form,Button} from 'react-bootstrap'
import { Col, Container , Row } from "react-bootstrap";
export default function SearchBar(props) {
    //const { products } = useContext(ProductContext);
    const[currentvalue,setcurrentvalue]=useState("");
    const {searchHandler, msg}=useContext(ProductContext);
    const filterData = () => {
        searchHandler(currentvalue);
    };
    return(
        // <Form className='d-flex m-auto mt-5 bg-warning rounded p-2 col-lg-8'>
        //     <FormControl type='search' placeholder='search' className='me-2 text-success' aria-label='search' onChange={(e)=>setcurrentvalue(e.target.value)}></FormControl>
        //     <Button onClick={filterData} variant="danger" className='btn rounded btn-outline-success text-light'>Search</Button>
        // </Form>
        <Container className="">

            <Row className=" justify-content-center mt-3">
                <Col sm={4}>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-3"
                            aria-label="Search"
                            value={currentvalue}
                            onChange={(e) => setcurrentvalue(e.target.value)}
                        />

                        <Button className="btn btn-primary" onClick={filterData} >
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>

            <div className=" fs-5 text-info w-50 mt-2  p-1 pe-0 text-center mx-auto">{msg}</div>
        </Container>
        );
}