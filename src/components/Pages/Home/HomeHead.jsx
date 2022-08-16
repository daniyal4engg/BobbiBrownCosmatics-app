import "../../styles/Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Box, Heading, Stack } from "@chakra-ui/react";

export const HomeHead = () => {
  return (
    <Container className="familyfontdiff">
      <Stack>
        <Box fontSize="90px" style={{ fontWeight: "bold" }}>
          BOBBI BROWN
        </Box>
      </Stack>
      <Row
        style={{
          height: "415.59px",
          width: "100%",
        }}
      >
        <Col
          style={{
            background: "black",
            color: "white",
            height: "415.59px",
            width: "50%",
          }}
          className="flexCenter"
        >
          <Box>SUMMER STOCK-UP EVENT</Box>
          <Heading fontSize>25% OFF</Heading>
          <Heading>EVERYTRHING</Heading>
          <Box> Get more of what you love for less. Plus, create a</Box>
          <Box> 3-piece Summer Travel Set when you spend $75+.</Box>
          <button>click</button>
        </Col>
        <Col style={{ height: "100%", width: "100%" }}>
          <img
            src="https://media.istockphoto.com/photos/fashion-accessories-and-smart-phone-with-blank-screen-top-view-picture-id639005694?k=20&m=639005694&s=170667a&w=0&h=OE9Dbb5kv60v6GNIaLFdjwdkzgi6-JW5wt9tY-Tc49s="
            alt="poster"
            className="imgScale"
          />
        </Col>
      </Row>
    </Container>
  );
};
