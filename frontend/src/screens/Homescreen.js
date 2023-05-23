import React, {useState, useEffect} from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

function Homescreen() {
    const [products, setProducts] = useState([]); //this creates a state variable called products and a function called setProducts to update the state variable
    useEffect(() => {
        async function fetchProducts() { //async function to fetch products
        const { data } = await axios.get('/api/products/') //await returns the promise's result when it resolves
        setProducts(data) //set the products state variable to the data
        }

        fetchProducts()
    }, [])
  return (
    <div>
      <h1>Welcome</h1>
      <h3>Latest Products</h3>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Homescreen;
