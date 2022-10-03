import React from 'react'
import { useState } from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Input, useDisclosure, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addTestData } from '../Redux/Student/Action.type';


const CreateTest = ({e}) => {

    const [name, setname] = useState("")
    const [subject, setsubject] = useState("")
    const [marks, setmarks] = useState("")
    const [date, setdate] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
   const dispatch=useDispatch()
   const toast = useToast({ position: "top" });

   
const HandleNewTestSave=()=>{
    if(name && subject && marks && date)
    {
        let payload={
            name,subject,marks,date
        }
        dispatch(addTestData(payload,e._id))
        onClose()
        toast({
            title: "Test added Succesfully",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
    }
}

  return (
    <Box>
      <Button size='sm' colorScheme="whatsapp" onClick={onOpen}>Create Test</Button>
       <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="whatsapp.50">
          <DrawerCloseButton />
          <DrawerHeader>Create your Test Data</DrawerHeader>

          <DrawerBody mt={160}>
            <label>
              Test Name :
              <Input
                placeholder="Test Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </label>

            <label>
              Subject :
              <Input
                placeholder="Enter  Subject"
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
              />
            </label>
            <label>
              Marks:
              <Input
                placeholder="Enter Marks"
                value={marks}
                onChange={(e) => setmarks(e.target.value)}
              />
            </label>

            <label>
              Date:
              <Input type="date" value={date} onChange={(e)=>setdate(e.target.value)} />
            </label>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={HandleNewTestSave}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default CreateTest