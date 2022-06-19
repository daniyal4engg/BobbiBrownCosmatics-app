import "../../../styles/navbar.css";
import {
  Box,
  Button,
  Center,
  Heading,
  Select,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

export const AllProducts = () => {
  const [data, setData] = useState([]);
  const [priceOrder, setPriceOrder] = useState("");
  const [sortCategory, setSortCategory] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    creamData({ priceOrder, sortCategory, page });
  }, [priceOrder, sortCategory, page]);
  const creamData = ({ priceOrder, sortCategory, page }) => {
    // http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick
    axios({
      url: "http://localhost:8000/consmatics",
      method: "get",
      params: {
        //   _sort: "category",
        //   _order: priceOrder,
        _page: page,
        _limit: 8,
        _sort: "price,category",
        _order: `${priceOrder},${sortCategory}`,
      },
    })
      .then((r) => setData(r.data))
      .catch((e) => e.data);
  };
  console.log("AllPRODUCTS", data);

  const handlefilter = (e) => {
    setPriceOrder(e.target.value);
  };
  const handleCategory = (e) => {
    setSortCategory(e.target.value);
  };

  return (
    <Box>
      <Wrap>
        <WrapItem>
          <Box>
            <Select
              mt="10px"
              mb="10px"
              width="400px"
              placeholder="Sort by Price"
              value={priceOrder}
              onChange={handlefilter}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Select>
          </Box>
          <Box>
            <Select
              mt="10px"
              mb="10px"
              width="400px"
              placeholder="Select option"
              value={sortCategory}
              onChange={handleCategory}
            >
              <option value="cream">Cream</option>
              <option value="lipstick">Lipstick</option>
              <option value="liquid">Liquid</option>
              <option value="mineral">Mineral</option>
              <option value="powder">Powder</option>
            </Select>
          </Box>
        </WrapItem>
      </Wrap>

      <Box align="end" mr={8}>
        <Button
          onClick={() => setPage(page - 1)}
          colorScheme="teal"
          variant="outline"
          mr={2}
        >
          prev
        </Button>
        <Button
          onClick={() => setPage(page + 1)}
          colorScheme="teal"
          variant="outline"
        >
          Next
        </Button>
      </Box>

      <Heading>ALL PRODUCTS</Heading>
      <Box className="grid familyfontdiff">
        {data.map((e) => {
          return (
            <Box key={e.id} marginLeft="20px" textAlign="start">
              <Link to={`/AllProductsSinglePage/${e.id}`}>
                <Center>
                  <img src={e.image_link} alt="" /> <br />
                </Center>
                <Text className="font-weight-normal" mt={2}>
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

// function AscDescByPrice({ priceOrder, handlefilter }) {
//   return (
//     <Form.Select
//       width="300px"
//       aria-label="Default select example"
//       mt="10px"
//       mb="10px"
//       placeholder="Select option"
//       value={priceOrder}
//       onChange={handlefilter}
//     >
//       <option value="">Select By Asc / Desc</option>
//       <option value="asc">Low to High</option>
//       <option value="desc">High to Low</option>
//     </Form.Select>
//   );
// }

// export default AscDescByPrice;

// <Select
// mt="10px"
// mb="10px"
// width="400px"
// placeholder="Select option"
// value={priceOrder}
// onChange={handlefilter}
// >
// <option value="asc">Low to High</option>
// <option value="desc">High to Low</option>
// </Select>

// <Select
// mt="10px"
// mb="10px"
// width="400px"
// placeholder="Select option"
// value={priceOrder}
// onChange={handlefilter}
// >
// <option value="asc">Low to High</option>
// <option value="desc">High to Low</option>
// </Select>
