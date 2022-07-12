import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import history from "./history";
import { Button, Navbar, Container, Nav, NavDropdown, Form, FormControl} from "react-bootstrap";
import { ContactMe } from "./containers/ContactMe";
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./auth-components/accountbox";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  
  const aboutSection = useRef(null);
  const productSection = useRef(null);
  const contactSection = useRef(null);

  const scrollDown=(ref)=>{
    window.scrollTo({
      top:ref.current.offsetTop,
      behavior:'smooth',
    });
  };
  return (
    
    <div className="App">
      <AppContainer>
        <AccountBox/>
      </AppContainer>
      <Router>
        <Header/>
        
        <h1 ref={productSection}>Products</h1>
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
        </Routes>
        <Navbar fixed="top" scrolling dark bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>shoppily.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0"
              style={{maxHeight: '100px'}}
              navbarScroll>
                <Nav.Link onClick={() => scrollDown(aboutSection)}>Who we are?</Nav.Link>
        <Nav.Link onClick={() => scrollDown(productSection)}>Products</Nav.Link>
        <NavDropdown title="Sections" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Women</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Men</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Kids
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link onClick={() => scrollDown(contactSection)}>Contact Me</Nav.Link>
              </Nav>
              <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        <Button variant="btn btn-success" onClick={() => history.push('/Login')}>Login</Button>
        <Button variant="btn btn-success" onClick={() => history.push('/Signup')}>Sign Up</Button>
      </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
      <p style={{visibility:"hidden"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi aliquam, atque excepturi non vitae eligendi velit nihil fugit delectus tenetur officiis esse perferendis numquam alias voluptate obcaecati aperiam libero deserunt molestias consectetur sunt nisi? Eos quae repudiandae sunt dolorum odit tenetur officia est maxime obcaecati molestias reiciendis, repellendus id consectetur totam rerum asperiores. Et mollitia voluptatibus magnam neque laudantium esse earum, reprehenderit doloribus tempora, fugiat porro harum reiciendis voluptatem! Eos voluptate unde officia laboriosam? Consequuntur cupiditate accusantium sit reprehenderit blanditiis quae dolores doloribus maxime est excepturi exercitationem, quas magni in illum obcaecati tempore, laudantium omnis. Assumenda maiores reprehenderit minima soluta! Sed labore vitae nostrum. Aperiam iure molestias nostrum tempora commodi unde praesentium, asperiores assumenda cum, beatae voluptatibus quo aut ad pariatur. Officia quaerat laborum odio ullam facilis tempora possimus quam dolores ab cumque consequuntur assumenda, soluta veritatis earum mollitia, perferendis voluptates voluptatibus animi delectus suscipit. Iste perferendis modi ipsa? Facere, non. Nisi illum tempore tenetur. Voluptatum quaerat pariatur est ut dolor optio aliquid, quam, distinctio consequatur incidunt quas ex vero eius. Amet numquam ut esse, magnam doloribus fuga repudiandae praesentium consequatur minus nisi alias maxime iste sequi sed eaque? Culpa totam ipsam nulla! Numquam sequi natus molestias officia harum accusantium.</p>
      <h1 ref={aboutSection}>Who am I ?</h1>
      <p>
      I just graduated from the Software Engineering Department(BSc. Degree) of Manisa Celal Bayar University this year. Shortly after, i have started to Computer Engineering MSc. Degree in Dokuz Eylül University on October, 2021. Now i'm in course stage and next year i'll start to thesis stage. I mainly have knowledge about deep learning, nlp, front end web developing and I love to work in these fields.
        We are a communications and printing company that helps our clients communicate faster and more effectively with their customers.

We work with local, national and international companies in a variety of industries. Our clients turn to Paragraph because they are looking for
original and effective ways to communicate with their customers and want to do business with a single supplier capable of providing a full range of graphic design and printing services.</p>
      
      <h1 ref={contactSection}></h1>
          <ContactMe/>
    </div>
  );
}

export default App;
