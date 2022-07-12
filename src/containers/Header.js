import React from "react";
import {Carousel} from "react-bootstrap";

export const Header = () => {
  return (
    <div className="ui  menu">
              <h2>shoppily.com</h2>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/070722-bayramsikligi.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Take a look</h3>
      <p>Shop for holiday season</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/070722-plaj-aks-ayk.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Shoes-Beach Accessories</h3>
      <p>Choose accessories that match the summer trend</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/070722-plaj.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Beach</h3>
      <p>Take a look to colourful swimsuits.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
};

export default Header;