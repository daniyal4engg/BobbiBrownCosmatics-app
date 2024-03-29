import "../../../styles/navbar.css";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Cream = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    creamData();
  }, []);
  const creamData = () => {
    // http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick
    axios({
      url: "https://bobbibrowncosmeticjson.herokuapp.com/creams",
      method: "get",
      //   params: {
      // _sort: "category",
      // _order: order,
      //     _sort: "name",
      //     _order: `${lipstickFilter}`,
      //   },
    })
      .then((r) => setData(r.data))
      .catch((e) => e.data);
  };
  // console.log("cream", data);
  return (
    <Box>
      <Heading>Cream</Heading>
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
              <Link to={`/creamsinglepage/${e.id}`}>
                <Button mb={2} mt={2} mr={4} bg="black" color="white">
                  View Product
                </Button>
              </Link>
              <Button mb={2} mt={2} w="133px" bg="black" color="white">
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
//

// <div className="input-group mb-3 mt-3">
// <div className="input-group-prepend">
//   <label className="input-group-text" for="inputGroupSelect01">
//     Options
//   </label>
// </div>
// <select
//   className="custom-select selectWidth bordercustom"
//   id="inputGroupSelect01"
//   value={catFilter}
//   onChange={FilterByCategory}
// >
//   <option>Choose...</option>
//   <option value="cream">Cream</option>
//   <option value="lipstick">Lipstick</option>
//   <option value="pencil">Pencil </option>
//   <option value="palette">Palette </option>
// </select>
// </div>
