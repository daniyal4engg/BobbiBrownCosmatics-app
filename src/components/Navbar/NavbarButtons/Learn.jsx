import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
export const Learn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn-dark" onClick={handleShow}>
        Learn
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Learn</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Always-On Artistry
          <p>OUR ARTISTS</p>
          <br />
          <p> VIRTUAL SERVICES</p>
          <br />
          <p>HOW TO VIDEOS</p>
          <p>Our Brand</p>
          <p>Join BB Access and earn points</p>
          <p>Find a store</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
