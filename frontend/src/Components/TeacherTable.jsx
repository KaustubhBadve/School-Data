import { Box, Button, Td, Tr, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteStudentData,
  getStudentData,
} from "../Redux/Student/Action.type";
import CreateTest from "./CreateTest";
import { StudenttestModal } from "./StudenttestModal";

const TeacherTable = ({ e, i }) => {
  const toast = useToast({ position: "top" });
  const dispatch = useDispatch();

  const HandleDelete = (id) => {
    dispatch(deleteStudentData(id));
    toast({
      title: "Student Deleted Succesfull",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    dispatch(getStudentData());
  };

  return (
    <Tr >
      <Td pt="40px" pb="40px">{i + 1}</Td>
      <Td pt="40px" pb="40px">{e.name}</Td>
      <Td pt="40px" pb="40px">{e.gender}</Td>
      <Td pt="40px" pb="40px">{e.age}</Td>
      <Td pt="40px" pb="40px">{e.email}</Td>
      <Td pt="40px" pb="40px">
        <StudenttestModal e={e} />
      </Td>
      <Td pt="40px" pb="40px">
        <CreateTest e={e} />
      </Td>
      <Td pt="40px" pb="40px">
        <Button size="sm" colorScheme="red" onClick={() => HandleDelete(e._id)}>
          Delete Data
        </Button>
      </Td>
    </Tr>
  );
};

export default TeacherTable;
