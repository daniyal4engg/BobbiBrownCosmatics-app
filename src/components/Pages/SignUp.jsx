import { Box, Text, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUp = () => {
  const Navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target)
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("https://ssense-api.herokuapp.com/register", user)
      .then((res) => {
        setTimeout(() => {
          Navigate("/signin");
        }, 3000);
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        alert("Signup Successfull !!!");
      })
      .catch((e) => {
        console.log("e", e);

        alert("Please Enter Right Credentials");
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
                as={"h2"}
                fontWeight="bolder"
                pl={"20%"}
                margin="auto"
                fontSize="30px"
              ></Heading>
            </Box>

            <Flex
              justify="center"
              align="center"
              direction="column"
              textAlign="center"
            >
              <Heading mt="10" as="h2" size="lg">
                Sign Up
              </Heading>
              <FormControl
                w="400px"
                h="320px"
                margin="auto"
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                borderRadius="5px"
                p={"3"}
                cursor="pointer"
                padding="30px"
                mt={5}
              >
                {/* First name..................... */}
                <FormLabel htmlFor="text" color={"grey"}>
                  First Name
                </FormLabel>
                <Input
                  height="30px"
                  width="300px"
                  marginLeft="20%"
                  focusBorderColor="RGBA(0, 0, 0, 0.64)"
                  id="firstName"
                  type="email"
                  placeholder="Enter a first name"
                  value={user.firstName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {/* LastName............................ */}
                <FormLabel htmlFor="text" color={"grey"}>
                  Last Name
                </FormLabel>
                <Input
                  height="30px"
                  width="300px"
                  marginLeft="20%"
                  focusBorderColor="RGBA(0, 0, 0, 0.64)"
                  id="lastName"
                  type="text"
                  placeholder="Enter a last name"
                  value={user.lastName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {/* Email...................... */}
                <FormLabel htmlFor="email" color={"grey"}>
                  Work Email
                </FormLabel>
                <Input
                  height="30px"
                  width="300px"
                  marginLeft="20%"
                  focusBorderColor="RGBA(0, 0, 0, 0.64)"
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                {/* Password ................................ */}

                <FormLabel htmlFor="text" color={"grey"}>
                  Password
                </FormLabel>
                <Input
                  height="30px"
                  width="300px"
                  marginLeft="20%"
                  type="password"
                  id="password"
                  focusBorderColor="RGBA(0, 0, 0, 0.64)"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />

                <Button
                  mt="20px"
                  height="40px"
                  width="300px"
                  borderColor="#ccd0d5"
                  color="white"
                  borderRadius={"50px"}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                  transform="scale(0.98)"
                  backgroundColor="rgb(99, 80, 236)"
                  fontSize={"17px"}
                  fontWeight="bold"
                  _hover={{
                    bg: "#f5f6f7",
                    background: "white",
                    color: "rgb(99, 80, 236)",
                    transform: "scale(0.98)",
                    fontWeight: "bold",
                  }}
                  onClick={(e) => {
                    handleRegister(e);
                  }}
                >
                  Submit
                </Button>
                <Text>Already have an account ?</Text>
                <NavLink
                  to="/signin"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  Login
                </NavLink>
              </FormControl>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
