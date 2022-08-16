import "../../styles/CreamLinerMaskara.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
export const Shop = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn-dark" onClick={handleShow}>
        Shop
      </Button>
      <Offcanvas className="forumfamily " show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontSize: "30px" }}>Shop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ letterSpacing: "-2px" }}>
          <p className="h4 underline">Sort by</p>
          <VStack>
            <Link className="h2" to="/allproducts">
              All Products
            </Link>
            <Link className="h2" to="/cream">
              Cream
            </Link>
            <Link className="h2" to="/lipstick">
              Lipstick
            </Link>
            <Link className="h2" to="/pencil">
              Pencil
            </Link>
            <Link className="h2" to="/palette">
              Palette
            </Link>
          </VStack>

          {/* <p className="h4">NEW</p>
          <p className="h4"> BESTSELLERS </p>
          <p className="h4"> VIRTUAL SERVICES </p>
  <p className="h4"> SPECIAL OFFERS </p> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
