// import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Offcanvas from "react-bootstrap/Offcanvas";

import Form from "react-bootstrap/Form";
// import { Box, StatHelpText } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";

const GithubUsers = (q = "mojombo", page = 1) => {
  return axios("https://fzk-bazaar1.herokuapp.com/productelctronics", {
    method: "GET",
    params: {
      q,
      per_page: 4,
      page,
    },
  });
};

export const Search = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(1);

  useEffect(() => {
    GithubUsers(query, page)
      .then((res) => {
        setData(res.data);
        // console.log("data",data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query, page]);

  const handleClick = (query) => {
    setQuery(query);
  };
  console.log("data", data);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log("Seach Response", data);
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
              {/* searchBox component */}
              <SearchBox handleClick={handleClick} />
              <div>
                {data.map((e) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        border: "1px solid black",
                        margin: "10px",
                      }}
                    >
                      <div>
                        <img
                          src={e.image}
                          alt=""
                          style={{
                            width: "80px",
                            height: "70px",
                            marginRight: "20px",
                            padding: "2px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          padding: "10px",
                        }}
                      >
                        {e.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

// SearchBox
const SearchBox = ({ handleClick }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <Box>
        <Form.Control
          type="text"
          placeholder="Product Name"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          variant="solid"
          colorScheme={"teal"}
          onClick={() => {
            handleClick(text);
          }}
        >
          Search
        </Button>
      </Box>
    </div>
  );
};
