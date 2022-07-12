import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {Card, Button} from "react-bootstrap";

const ProductComponent = () => {
  const transform = `rotate(${-45}deg)`;
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Card style={{ width: '18rem' }}>
        <a class="ui left corner label">
          <i class="heart icon red" style={{transform}}><i style={{color:'black'}}>drop a heart</i></i>
        </a>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>$ {price}</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Link to={`/product/${id}`}><a class="ui violet circular label">See product details</a></Link>
      </Card.Body>
    </Card>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;