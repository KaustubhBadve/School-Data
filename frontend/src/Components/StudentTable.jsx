import { Box, Button, Td, Tr, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { getTestDataforStudent, updateTestData } from "../Redux/Student/Action.type";


const StudentTable = ({ e, i }) => {
  const toast = useToast({ position: "top" });
  const dispatch = useDispatch();

  const HandleUpdate = (id) => {
    let data={
      completed:e.completed
    }
    dispatch(updateTestData(id,data));
    // window.location.reload()
    toast({
      title: "Updated Succesfull",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setTimeout(()=>{
      dispatch(getTestDataforStudent());
    },500)
    
 
  }; 

  return (
    <Tr>
      <Td>{i + 1}</Td>
      <Td>{e.name}</Td>
      <Td>{e.subject}</Td>
      <Td>{e.marks}</Td>
      <Td>{e.date}</Td>
      <Td>{e.completed=="false" ? "Pending" : "Completed"}</Td>
      <Td>
        <Button w="200px" colorScheme="red" onClick={() => HandleUpdate(e._id)}>
          Mark as Completed
        </Button>
      </Td>
    </Tr>
  );
};

export default StudentTable;
