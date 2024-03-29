import "../../../styles/navbar.css";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { ClassNames } from "@emotion/react";
export const Lipstick = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    creamData();
  }, []);
  //  http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick
  const creamData = () => {
    axios({
      url: "https://bobbibrowncosmeticjson.herokuapp.com/lipsticks",
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
  // console.log("lipstick", data);
  return (
    <Box>
      <Heading>Lipstick</Heading>
      <Box className="grid familyfontdiff">
        {data.map((e) => {
          return (
            <Box key={e.id} padding="10px" textAlign="start">
              <Center>
                <img src={e.image_link} alt="" /> <br />
              </Center>
              <Text className="font-weight-normal" mt={2}>
                {e.name}
              </Text>
              <Text mt={2}>${e.price}</Text>

              <Text mt={2}>{e.category}</Text>
              <Link to={`/LipstickSinglePage/${e.id}`}>
                <Button mb={2} mt={2} mr={4} bg="black" color="white">
                  View Product
                </Button>
              </Link>
              <Button mb={2} mt={2} bg="black" color="white">
                Add to Bag
              </Button>
              <br />
              <hr />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
