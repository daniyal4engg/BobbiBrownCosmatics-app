// import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Offcanvas from "react-bootstrap/Offcanvas";

import Form from "react-bootstrap/Form";
export const Search = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn-dark" onClick={handleShow}>
        Search
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Search Product</Form.Label>
              <Form.Control type="text" placeholder="Product Name" />
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
