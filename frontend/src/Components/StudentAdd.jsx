import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
  useToast,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { STUDENT_ADD_DATA } from "../Redux/Student/Action";
import { addStudentData, getStudentData } from "../Redux/Student/Action.type";

export function StudentAdd() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const toast = useToast({ position: "top" });
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");

  const HandleAdd = () => {
    let payload = {
      name,
      age,
      gender,
      role: "student",
      email: `${name}@gmail.com`,
      password: "123",
    };
    dispatch(addStudentData(payload))
    onClose()
    toast({
        title: "Student added Succesfull",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      dispatch(getStudentData())
  }
 

  const GenderSelector = (e) => {
    let val = e.target.value;
    setgender(val);
  };

  return (
    <>
      <Button colorScheme="yellow" w="200px" onClick={onOpen}>
        Add Student
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Student</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="name"
                defaultValue={name}
                onChange={(e) => setname(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Age</FormLabel>
              <Input
                placeholder="age"
                defaultValue={age}
                onChange={(e) => setage(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Select cursor="pointer" value={gender} onChange={GenderSelector}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={HandleAdd}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
