import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions"; //listProducts is in curly braces because it is not the default export, it is a named export
import Loader from "../components/Loader";
import Message from "../components/Message";

function Homescreen() {
    const dispatch = useDispatch() //useDispatch is a hook that gives us access to the dispatch function, we can use it to dispatch actions, dispatch means to send out
    const productList = useSelector(state => state.productList) //get the productList from the state, state is the global state of the app, which is stored in the redux store, a state is a snapshot of the app at a given time
    const { loading, error, products } = productList //destructure the productList object into loading, error, and products

    useEffect(() => {
        dispatch(listProducts())
    }, [])

    return (
      <div>
        <h1>Lastest Products</h1>
        {loading ? <Loader />
          : error ? <Message variant='danger'>{error}</Message> //if there is an error, display the error message
            :
            <Row>
              {products.map((product) => (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
  }
    </div>
  );
}

export default Homescreen;
