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
        <Col style={{ height: "100%", width: "50%" }}>
          <img
            src="https://media.istockphoto.com/photos/fashion-and-makeup-accessories-with-copy-space-on-white-picture-id639006000?k=20&m=639006000&s=170667a&w=0&h=25-j8c8_Y609l2CnxQKj_L_M0sqskBshn05Di-HG00E="
            alt="poster"
            width="100%"
            height="500px"
          />
        </Col>
      </Row>
    </Container>
  );
};
