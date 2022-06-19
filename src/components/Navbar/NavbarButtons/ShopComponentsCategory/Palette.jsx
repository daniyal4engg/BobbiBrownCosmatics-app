import "../../../styles/navbar.css";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { ClassNames } from "@emotion/react";
export const Palette = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    creamData();
  });
  // https://makeup-api.herokuapp.com/api/v1/products.json?product_category=palette&product_type=eyeshadow
  const creamData = () => {
    axios({
      url: "http://localhost:8000/palettes",
      method: "get",
      params: {
        // _sort: "category",
        // _order: order,
        // _sort: "name",
        // _order: `${lipstickFilter}`,
      },
    })
      .then((r) => setData(r.data))
      .catch((e) => e.data);
  };
  console.log("palette", data);
  return (
    <Box>
      <Heading>Palette</Heading>
      <Box className="grid familyfontdiff">
        {data.map((e) => {
          return (
            <Box key={e.id} marginLeft="20px" textAlign="start">
              <Link to={`/paletteSinglePage/${e.id}`}>
                <Center>
                  <img
                    src={e.api_featured_image}
                    alt=""
                    width="300px"
                    height="300px"
                  />{" "}
                  <br />
                </Center>
                <Text className="font-weight-normal wordLimit" mt={2}>
                  {e.name}
                </Text>
                <Text mt={2}>${e.price}</Text>

                <Text mt={2}>{e.category}</Text>
                <Button mb={2} mt={2} bg="black" color="white">
                  Add to Bag
                </Button>
                <br />
                <hr />
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
