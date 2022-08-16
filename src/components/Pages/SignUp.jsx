// import { Box, Text, Heading } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";

// import { FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export const SignUp = () => {
//   const Navigate = useNavigate();

//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     // console.log(e.target)
//     const { id, value } = e.target;
//     setUser({ ...user, [id]: value });
//   };
//   const handleRegister = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://ssense-api.herokuapp.com/register", user)
//       .then((res) => {
//         setTimeout(() => {
//           Navigate("/signin");
//         }, 3000);
//         setUser({
//           firstName: "",
//           lastName: "",
//           email: "",
//           password: "",
//         });
//         alert("Signup Successfull !!!");
//       })
//       .catch((e) => {
//         console.log("e", e);

//         alert("Please Enter Right Credentials");
//       });
//   };

//   return (
//     <Box>
//       <Box w="100%">
//         <Box w={"100%"} h="100%" display="flex" justifyContent={"center"}>
//           <Box w={"60%"}>
//             <Box>
//               <Heading
//                 as={"h2"}
//                 fontWeight="bolder"
//                 pl={"20%"}
//                 margin="auto"
//                 fontSize="30px"
//               ></Heading>
//             </Box>

//             <Flex
//               justify="center"
//               align="center"
//               direction="column"
//               textAlign="center"
//             >
//               <Heading mt="10" as="h2" size="lg">
//                 Sign Up
//               </Heading>
//               <FormControl
//                 w="350px"
//                 h="465px"
//                 margin="auto"
//                 boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
//                 borderRadius="5px"
//                 cursor="pointer"
//                 mt={5}
//                 padding="15px"
//               >
//                 {/* First name..................... */}
//                 <FormLabel htmlFor="text" color={"grey"}>
//                   First Name
//                 </FormLabel>
//                 <Input
//                   height="30px"
//                   width="320px"
//                   mt={1}
//                   focusBorderColor="RGBA(0, 0, 0, 0.64)"
//                   id="firstName"
//                   type="email"
//                   placeholder="Enter a first name"
//                   value={user.firstName}
//                   onChange={(e) => {
//                     handleChange(e);
//                   }}
//                 />
//                 {/* LastName............................ */}
//                 <FormLabel htmlFor="text" color={"grey"} mt={3}>
//                   Last Name
//                 </FormLabel>
//                 <Input
//                   height="30px"
//                   width="320px"
//                   focusBorderColor="RGBA(0, 0, 0, 0.64)"
//                   mt={1}
//                   id="lastName"
//                   type="text"
//                   placeholder="Enter a last name"
//                   value={user.lastName}
//                   onChange={(e) => {
//                     handleChange(e);
//                   }}
//                 />
//                 {/* Email...................... */}
//                 <FormLabel htmlFor="email" color={"grey"} mt={3}>
//                   Work Email
//                 </FormLabel>
//                 <Input
//                   height="30px"
//                   width="320px"
//                   mt={1}
//                   focusBorderColor="RGBA(0, 0, 0, 0.64)"
//                   id="email"
//                   type="email"
//                   placeholder="Enter email"
//                   value={user.email}
//                   onChange={(e) => {
//                     handleChange(e);
//                   }}
//                 />
//                 {/* Password ................................ */}

//                 <FormLabel htmlFor="text" color={"grey"} mt={3}>
//                   Password
//                 </FormLabel>
//                 <Input
//                   height="30px"
//                   width="320px"
//                   type="password"
//                   mt={1}
//                   id="password"
//                   focusBorderColor="RGBA(0, 0, 0, 0.64)"
//                   placeholder="Enter your password"
//                   value={user.password}
//                   onChange={(e) => {
//                     handleChange(e);
//                   }}
//                 />

//                 <Button
//                   mt="20px"
//                   height="40px"
//                   width="300px"
//                   color="white"
//                   borderRadius={"50px"}
//                   _focus={{
//                     boxShadow:
//                       "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
//                   }}
//                   transform="scale(0.98)"
//                   backgroundColor="#3182ce"
//                   fontSize={"17px"}
//                   fontWeight="bold"
//                   _hover={{
//                     background: "#407db5",
//                     color: "white",
//                     transform: "scale(0.98)",
//                   }}
//                   onClick={(e) => {
//                     handleRegister(e);
//                   }}
//                 >
//                   Submit
//                 </Button>
//                 <Text pt={"20px"}>Already have an account ?</Text>
//                 <NavLink
//                   to="/signin"
//                   style={{
//                     textDecoration: "none",
//                     fontWeight: "bold",
//                     paddingTop: "15px",
//                   }}
//                 >
//                   Login
//                 </NavLink>
//               </FormControl>
//             </Flex>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [show, setShow] = useState(false);
  // const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...data, userData]);

    axios
      .post("https://apartmentauth.herokuapp.com/register", userData)
      .then(() => {
        alert("SignUp Successfully");
        navigate("/login");
        setUserData({
          first_name: "",
          last_name: "",
          email: "",
          phone_no: "",
          password: "",
        });
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios.get("https://apartmentauth.herokuapp.com/register").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} minW={"sm"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          w="350px"
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={3}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    name="first_name"
                    type="text"
                    onChange={handleChange}
                    value={userData.first_name}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    name="last_name"
                    type="text"
                    onChange={handleChange}
                    value={userData.last_name}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                onChange={handleChange}
                value={userData.email}
              />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone no.</FormLabel>
              <Input
                name="phone_no"
                type="Phone no."
                onChange={handleChange}
                value={userData.phone_no}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  value={userData.password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Link color={"blue.400"} to="/login">
                Already a User Login
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
