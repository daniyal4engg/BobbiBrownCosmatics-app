import "../../../styles/navbar.css";
import { Box, Button, Center, Text } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const PencilSinglePage = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    creamSingleData();
  }, []);
  const creamSingleData = async () => {
    try {
      const { id } = params;
      const res = await fetch(`http://localhost:8000/pencils/${id}`);
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log("error", err);
    }
  };
  console.log("cremSingle", data);
  console.log("creamSinglePAge", data);
  return (
    <Center mt="10px">
      <Box
        marginLeft="20px"
        textAlign="start"
        border="4px solid grey"
        padding="15px"
      >
        <Center>
          <img src={data.image_link} alt="" /> <br />
        </Center>
        <Text className="font-weight-normal" mt={2}>
          {data.name}
        </Text>
        <Text mt={2}>${data.price}</Text>

        <Text mt={2}>{data.category}</Text>
        <Button mb={2} mt={2} bg="black" color="white">
          Add to Bag
        </Button>
      </Box>
    </Center>
  );
};
