import React, { useEffect, useState } from "react";
import { Col, Container, Row, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/cjy0207/react-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="product-detail-container">
      <Row>
        <Col className="product-img">
          <img src={product?.img} width={350} />
        </Col>

        <Col>
          <div>
            <h4>{product?.title}</h4>
          </div>
          <div>
            <h5>\{product?.price}</h5>
          </div>
          <div>{product?.choice === true ? "Conscious Choice" : ""}</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size?.map((size, index) => (
                  <Dropdown.Item key={index}>
                    {size}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Button variant="dark" className="add-button">추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
