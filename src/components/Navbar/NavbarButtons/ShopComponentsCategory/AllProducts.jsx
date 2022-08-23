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
import { useCart } from "react-use-cart";
import swal from "sweetalert";
export const AllProducts = () => {
  const [data, setData] = useState([]);
  const [priceOrder, setPriceOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [page, setPage] = useState(1);

  // cart
  const { addItem } = useCart();
  useEffect(() => {
    creamData({ priceOrder, filterCategory, page });
  }, [priceOrder, filterCategory, page]);
  const creamData = ({ priceOrder, filterCategory, page }) => {
    axios({
      url: "https://bobbibrowncosmeticjson.herokuapp.com/consmatics",
      method: "get",
      params: {
        _page: page,
        _limit: 15,
        _sort: "price",
        _order: `${priceOrder}`,
        title: "category",
        // category: `${sortCategory}`,
        category: !filterCategory ? undefined : `${filterCategory}`,
      },
    })
      .then((r) => setData(r.data))
      .catch((e) => e.data);
  };
  // sort
  const handleSort = (e) => {
    setPriceOrder(e.target.value);
  };
  // filter
  const handleCategory = (e) => {
    setFilterCategory(e.target.value);
  };
  // console.log("dilterrrr", filterCategory);

  //  sweet Alert
  // const handleAlert = () => {
  //   swal({
  //     title: "Product Added!",
  //     // text: "You clicked the button!",
  //     icon: "success",
  //     button: "Ok",
  //   })
  // };
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
              onChange={handleSort}
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
              value={filterCategory}
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
          Prev
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
            <Center>
              <Box
                key={e.id}
                // className="wholeBlock"
                // marginLeft="40px"
                textAlign="start"
                padding="10px"
              >
                {/* <Link to={`/AllProductsSinglePage/${e.id}`}> */}

                <Center>
                  <img src={e.image_link} alt="" /> <br />
                </Center>
                <Text className="font-weight-normal" mt={2}>
                  {e.name}
                </Text>
                <Text mt={2}>${e.price}</Text>

                <Text mt={2}> {e.category ? e.category : "Empty"} </Text>
                <Link to={`/AllProductsSinglePage/${e.id}`}>
                  <Button
                    mb={2}
                    mt={2}
                    mr={4}
                    // w="119.11px"
                    bg="black"
                    color="white"
                  >
                    View Product
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    addItem(e);
                    swal({
                      title: "Product Added!",
                      // text: "You clicked the button!",
                      icon: "success",
                      button: "Ok",
                    });
                  }}
                  mb={2}
                  mt={2}
                  bg="black"
                  color="white"
                  w="133px"
                >
                  Add to Cart
                </Button>
                <br />
                {/* <hr /> */}
                {/* </Link> */}
              </Box>
            </Center>
          );
        })}
      </Box>
      <Box align="end" mr={8} mb={8} mt={8}>
        <Button
          onClick={() => setPage(page - 1)}
          colorScheme="teal"
          variant="outline"
          mr={2}
        >
          Prev
        </Button>
        <Button
          onClick={() => setPage(page + 1)}
          colorScheme="teal"
          variant="outline"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
