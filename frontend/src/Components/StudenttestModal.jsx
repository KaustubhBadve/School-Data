import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Heading,
    Box,
    Stack,
    useToast,
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import axios from 'axios'
import Loading from './Loading'
import { deleteTestData, getTestData } from '../Redux/Student/Action.type'


export function StudenttestModal({e}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast({ position: "top" });
    const data=useSelector((state)=>state.Student.test)
    const btnRef = React.useRef();
   const dispatch=useDispatch()
   
const getData=()=>{
    dispatch(getTestData(e._id))
    onOpen()
}

const HandleDelete=(id)=>{
    dispatch(deleteTestData(id))
    toast({
        title: "Test Deleted Succesfull",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    dispatch(getTestData(e._id))
    onClose()
}

    return (
      <>
        <Button size='sm' colorScheme="cyan" onClick={getData}>View Tests</Button>
  
        <Modal  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent backgroundColor="whatsapp.50">
            <ModalHeader>Student Test Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Box
        style={{
          margin: "auto",
          gap: "10px",
          marginTop: "10px",
          maxHeight:"500px",
          minHeight:"500px",
          overflow:"scroll"
        }}
      >
        {data ? 
          data.map((e) => {
            return <Box backgroundColor="whatsapp.100" style={{borderRadius:"10px",paddingLeft:"10px",paddingBottom:"10px",paddingRight:"10px"}}  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
            <Stack style={{alignContent:"space-between",justifyContent  :"space-between", marginTop:"20px"}}>
            <Box style={{textAlign:"left"}}>Test Name :  {e.name}</Box>
            <Box style={{textAlign:"left"}}>Test Marks : {e.marks}</Box>
            <Box style={{textAlign:"left"}}>Test Subject : {e.subject}</Box>
            <Box style={{textAlign:"left"}}>Test Date : {e.date}</Box>
            <Button w="70px" h="20px" fontSize="13px" p="15px" onClick={()=>HandleDelete(e._id)} colorScheme="red">Delete</Button>
            </Stack>
          </Box>
        }) :<Heading><Loading/></Heading>}
      </Box>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }