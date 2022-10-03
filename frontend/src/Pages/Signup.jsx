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
    Text,
    useColorModeValue,
    Link,
    useToast,
    Select,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import Navbar from "../Components/Navbar";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";
  import style from "./CSS/Login.module.css"
  
  
  export default function Signup() {
    const toast = useToast({ position: "top" });
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("")
    const [role, setrole] = useState("")
    const [gender, setgender] = useState("")
    const [age, setage] = useState(0)
  
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
  
    const Handlesignup = () => {
     
  
      if (email && password && name && role && gender && age) {
          let payload={
              email,password,name,role,gender,age
          }
          console.log("payload",payload)
        axios.post("https://tutuinclass2022.herokuapp.com/auth/signup",payload).then((r) => {
          console.log(r);
          if (r.data == "ALready User Exists") {
            toast({
              title: "User Already exist",
              duration: 5000,
              isClosable: true,
            });
          } else if(r.data.messege=="Signup Succesfull") {
            toast({
              title: "Signup Succesfull",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            navigate("/login");
          }
        });
      } else {
        toast({
          title: "Fill all fields",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    };
  
    const RoleSelector=(e)=>{
      let val=e.target.value
      console.log(val)
      setrole(val)
    }
  
    const GenderSelector=(e)=>{
      let val=e.target.value
      console.log(val)
      setgender(val)
    }
  
    return (
      <>
        <Navbar />
        <Box className={style.BB}>
        <Flex
          minH={"50vh"}
          width="500px"
          align="center"
          m="auto"
          ml="650px"
          justifyContent="center"
          // justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Sign up
              </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool features ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <HStack alignContent="center" alignItems="center">
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
                    </FormControl>
                  </Box>
                  <Box>
                  <FormLabel>Select Role</FormLabel>
                    <Select cursor="pointer" value={role} onChange={RoleSelector}>
                    <option value="">Select Role</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                    </Select>
                  </Box>
                </HStack>
  
                <HStack alignContent="center" alignItems="center">
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Gender</FormLabel>
                      <Select cursor="pointer" value={gender} onChange={GenderSelector}>
                    <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Select>
                    </FormControl>
                  </Box>
                   <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Age</FormLabel>
                      <Input type="number" value={age} onChange={(e)=>setage(e.target.value)} />
                    </FormControl>
                  </Box>
                </HStack>
  
  
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
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
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={Handlesignup}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user? <Link color={"blue.400"}>Login</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        </Box>
      </>
    );
  }
  