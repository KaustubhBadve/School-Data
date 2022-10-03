import {
  Box,
  Button,
  Flex,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Toast,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import Loading from "../Components/Loading";
import Navbarteacher from "../Components/Navbarteacher";
import TeacherTable from "../Components/TeacherTable";
import { getStudentData, SearchTitle } from "../Redux/Student/Action.type";
import "../Pages/CSS/All.css";
import axios from "axios";

const Teacherdashboard = () => {
  const studentData = useSelector((state) => state.Student.student);
  const dispatch = useDispatch();
  let [title, setSearchtitle] = useState("");
  const [skip, setskip] = useState(0)
  const [page, setpage] = useState(0)
  const [total, settotal] = useState([])
  const getData = () => {
    dispatch(getStudentData(skip));
  };

  const TotalData=()=>{
    axios.get("https://tutuinclass2022.herokuapp.com/student/totalcount").then((r)=>{
      settotal(r.data)
    })
  }

  const handleSearch = () => {
    console.log("title", title);
    dispatch(SearchTitle(title));
  };

  const HandleDecreament=()=>{
    if(skip>0){
        setskip(skip-5)
        setpage(page-1)
    }
  }


  const HandleIncreament=()=>{
        setskip(skip+5)
        setpage(page+1)
  }
  
  let pages=Math.ceil(total.length/2)

  useEffect(() => {
      getData();
      TotalData()
  }, [skip]);

  return (
    <Box
      bg="linear-gradient(0deg,rgba(34,19,19,1)0%,rgb(11, 45, 97)100%)"
      color="white"
    >
      <Navbarteacher />

      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" w="60%" m="auto" mt="30px">
            <Box display="flex" gap="20px">
            <Input
            value={title}
            backgroundColor="blue.100"
            color="black"
            onChange={(e) => setSearchtitle(e.target.value)}
            placeholder="Search Student name"
            w="500px"
          />
          <Button onClick={handleSearch} w="200px" colorScheme="yellow">
            Search
          </Button>
            </Box>

            <Box display="flex" justifyContent="space-evenly" w="200px" alignItems="center">
                <Button size="sm" disabled={skip<=0} onClick={HandleDecreament} w="30px" colorScheme="pink">{`<`}</Button> 
                {page+1}  
                <Button onClick={HandleIncreament} disabled={(page+1)*pages>=total.length}  colorScheme="pink" w="30px" size="sm">{`>`}</Button>
            </Box>
        
        </Box>
        <Box display="flex" p="50px" justifyContent="space-between" gap="10px">
          <Box
            bg="linear-gradient(0deg,rgba(14,19,90,1)0%,rgb(11, 145, 197)100%)"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            w="20%"
            maxH="70vh"
            minH="70vh"
            borderRadius="10px"
          >
            <Filter />
          </Box>

          <Box
          p="30px"
            maxH="70vh"
            bg="linear-gradient(0deg,rgba(14,19,90,1)0%,rgb(11, 145, 197)100%)"
            className="table"
            w="80%"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="10px"
          >
            <TableContainer>
              <Table colorScheme="teal">
                <TableCaption color="whiteAlpha.400" fontSize="25px" fontStyle="italic">Student Data</TableCaption>
                <Thead >
                  <Tr >
                    <Th fontSize="18px" color="whiteAlpha.900">Sr.</Th>
                    <Th fontSize="18px" color="whiteAlpha.900">Name</Th>
                    <Th fontSize="18px" color="whiteAlpha.900">Gender</Th>
                    <Th fontSize="18px"  color="whiteAlpha.900">Age</Th>
                    <Th fontSize="18px" color="whiteAlpha.900">Email</Th>
                    <Th fontSize="18px" color="whiteAlpha.900">Alloted Test</Th>
                    <Th fontSize="18px" color="whiteAlpha.900">Tests</Th>
                    <Th fontSize="18px" color="whiteAlpha.900">Delete Student Data</Th>
                  </Tr>
                </Thead>
                <Tbody >
                  {studentData ? (
                    studentData.map((e, i) => {
                      return <TeacherTable e={e} i={i} />;
                    })
                  ) : (
                    <Loading />
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Teacherdashboard;
