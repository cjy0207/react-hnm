import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    console.log("q", searchQuery); 
    const url = `https://my-json-server.typicode.com/cjy0207/react-hnm/products?q=${searchQuery}`;
    const res = await fetch(url);
    const data = await res.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]); 

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
