// import { Box, Center, Text } from "@chakra-ui/react";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { isLogin } from "../../Redux/Auth/action";

// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Heading,
//   Button,
//   Flex,
// } from "@chakra-ui/react";

// export const SignIn = () => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
//   const Navigate = useNavigate();
//   const dispatch = useDispatch();

//   const onChangeInput = (e) => {
//     const { id, value } = e.target;
//     setUser({ ...user, [id]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://ssense-api.herokuapp.com/login", user)
//       .then((res) => {
//         localStorage.setItem("loginUser", JSON.stringify(res.data));
//         console.log(res.data);
//         dispatch(isLogin(res.data));
//         setTimeout(() => {
//           Navigate("/");
//         }, 2000);
//         setUser({
//           email: "",
//           password: "",
//         });
//         alert("Login Successful ! ! !");
//       })
//       .catch((e) => {
//         alert("Login Failed");
//         Navigate("/signup");
//       });
//   };

//   return (
//     <Box>
//       <Box w="100%">
//         <Box w={"100%"} h="100%" display="flex" justifyContent={"center"}>
//           <Box w={"60%"}>
//             <Flex
//               justify="center"
//               align="center"
//               direction="column"
//               textAlign="center"
//             >
//               <Heading mt="10" as="h2" size="lg">
//                 Login
//               </Heading>
//               <FormControl
//                 w="350px"
//                 h="360px"
//                 margin="auto"
//                 boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
//                 borderRadius="5px"
//                 cursor="pointer"
//                 mt={5}
//                 padding="15px"
//               >
//                 {/* Email...................... */}
//                 <FormLabel htmlFor="email" color={"grey"} mt={3}>
//                   Email
//                 </FormLabel>
//                 <Input
//                   height="40px"
//                   width="320px"
//                   mt={1}
//                   focusBorderColor="grey"
//                   id="email"
//                   type="email"
//                   placeholder="Enter Email"
//                   value={user.email}
//                   onChange={(e) => {
//                     onChangeInput(e);
//                   }}
//                 />
//                 {/* Password ................................ */}

//                 <FormLabel htmlFor="Password" color={"grey"} mt={3}>
//                   Password
//                 </FormLabel>
//                 <Input
//                   height="30px"
//                   width="320px"
//                   type="password"
//                   id="password"
//                   mt={1}
//                   focusBorderColor="grey"
//                   placeholder="Enter Password"
//                   value={user.password}
//                   onChange={(e) => {
//                     onChangeInput(e);
//                   }}
//                 />

//                 <Button
//                   mt="20px"
//                   height="40px"
//                   width="300px"
//                   marginTop="26px"
//                   borderColor="#ccd0d5"
//                   color="white"
//                   borderRadius={"50px"}
//                   backgroundColor={"#3182ce"}
//                   _focus={{
//                     boxShadow:
//                       "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
//                   }}
//                   transform="scale(0.98)"
//                   fontSize={"17px"}
//                   fontWeight="bold"
//                   _hover={{
//                     background: "#407db5",
//                     transform: "scale(0.98)",
//                     color: "white",
//                   }}
//                   onClick={(e) => {
//                     handleSubmit(e);
//                   }}
//                 >
//                   Login
//                 </Button>
//                 <Center>
//                   <Box pt="20px">
//                     <Box>
//                       <Text>Create new Account</Text>
//                     </Box>
//                     <Box pt={"10px"} pl="10px">
//                       <NavLink
//                         to="/signup"
//                         style={{ textDecoration: "none", fontWeight: "bold" }}
//                       >
//                         Signup
//                       </NavLink>
//                     </Box>
//                   </Box>
//                 </Center>
//               </FormControl>
//             </Flex>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// login check
import { useAuth } from "../Pages/Context/Auth";
export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (email, password) => {
    auth.login(!user); /* auth */
    axios
      .post("https://apartmentauth.herokuapp.com/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        alert("Access Allowed");
        navigate("/");
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.message);
        alert("Password is Wrong");
        navigate("/signup");
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log In </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          w="350px"
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handleEmail} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={handlePassword} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={() => {
                  handleLogin(email, password);
                }}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <NavLink color={"blue.400"} to="/signup">
                Cretae Account
              </NavLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
