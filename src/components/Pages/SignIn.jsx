import { Box, Text } from "@chakra-ui/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { isLogin } from "../../Redux/Auth/action";
import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";

export const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ssense-api.herokuapp.com/login", user)
      .then((res) => {
        localStorage.setItem("loginUser", JSON.stringify(res.data));
        console.log(res.data);
        dispatch(isLogin(res.data));
        setTimeout(() => {
          Navigate("/");
        }, 2000);
        setUser({
          email: "",
          password: "",
        });
        alert("Login Successful ! ! !");
      })
      .catch((e) => {
        alert("Login Failed");
        Navigate("/signup");
      });
  };

  return (
    <Box>
      <Box w="100%">
        <Box
          w={"100%"}
          h="100%"
          display="flex"
          justifyContent={"space-between"}
        >
          <Box w={"60%"}>
            <Box>
              <Heading
                as={"h1"}
                pl="20%"
                margin="auto"
                fontSize="40px"
              ></Heading>
            </Box>

            <Flex
              justify="center"
              align="center"
              direction="column"
              textAlign="center"
            >
              <Heading mt="10" as="h2" size="lg">
                LogIn
              </Heading>
              <FormControl
                w="400px"
                h="220px"
                margin="auto"
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                borderRadius="5px"
                p={"3"}
                cursor="pointer"
                padding="30px"
                mt={5}
              >
                {/* Email...................... */}
                <FormLabel htmlFor="email" color={"grey"}>
                  Work Email
                </FormLabel>
                <Input
                  height="30px"
                  width="300px"
                  marginLeft="20%"
                  focusBorderColor="grey"
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={(e) => {
                    onChangeInput(e);
                  }}
                />
                {/* Password ................................ */}

                <FormLabel htmlFor="Password" color={"grey"}>
                  Password
                </FormLabel>
                <Input
                  height="30px"
                  width="300px"
                  marginLeft="20%"
                  type="password"
                  id="password"
                  focusBorderColor="grey"
                  placeholder="Enter password"
                  value={user.password}
                  onChange={(e) => {
                    onChangeInput(e);
                  }}
                />

                <Button
                  mt="20px"
                  height="40px"
                  width="400px"
                  borderColor="#ccd0d5"
                  color="white"
                  borderRadius={"50px"}
                  backgroundColor={"rgb(99, 80, 236)"}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                  transform="scale(0.98)"
                  fontSize={"17px"}
                  fontWeight="bold"
                  _hover={{
                    bg: "#f5f6f7",
                    background: "white",
                    transform: "scale(0.98)",
                    color: "rgb(99, 80, 236)",
                  }}
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Login
                </Button>
                <Box display={"flex"} pt="30px">
                  <Box>
                    <Text>Create your Account</Text>
                  </Box>
                  <Box pt={"15px"} pl="10px">
                    <NavLink to="/signup" style={{ textDecoration: "none" }}>
                      Signup
                    </NavLink>
                  </Box>
                </Box>
              </FormControl>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
