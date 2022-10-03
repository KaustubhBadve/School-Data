import { Box, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Components/Loading'
import Navbarteacher from '../Components/Navbarteacher'
import StudentTable from '../Components/StudentTable'
import { getTestDataforStudent } from '../Redux/Student/Action.type'

const Studentdashboard = () => {
  const test=useSelector((state)=>state.Student.test)
  console.log(test);
  const dispatch=useDispatch()

  const getTestData=()=>{
    dispatch(getTestDataforStudent())
  }

  useEffect(() => {
  getTestData()
  }, [])
  
  return (
    <Box  minH="99vh" color="whiteAlpha.900"  bg="linear-gradient(0deg,rgba(14,119,90,1)0%,rgb(111, 145, 197)100%)">
      <Navbarteacher/>
     

      <Box
            maxH="70vh"
            bgColor="whiteAlpha.400"
            className="table"
            w="80%"
            m="auto"
            mt="60px"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="10px"
          >
            <TableContainer>
              <Table colorScheme="teal">
                <TableCaption>Your Alloted Test</TableCaption>
                <Thead>
                  <Tr>
                    <Th fontSize="17px" color="white.900">Sr.</Th>
                    <Th fontSize="17px" color="white.900">Test</Th>
                    <Th fontSize="17px" color="white.900">Subject</Th>
                    <Th fontSize="17px" color="white.900">Marks</Th>
                    <Th fontSize="17px" color="white.900">Date</Th>
                    <Th fontSize="17px" color="white.900">Status</Th>
                    <Th fontSize="17px" color="white.900">Marks as Completed</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {test ? (
                    test.map((e, i) => {
                      return <StudentTable e={e} i={i} />;
                    })
                  ) : (
                    <Loading />
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>

    </Box>
  )
}

export default Studentdashboard