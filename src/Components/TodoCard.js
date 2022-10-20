import React, { useState } from "react";
import { Table, Tbody, Tr, Td, TableContainer, useDisclosure, Input } from "@chakra-ui/react";
import { Button, WrapItem } from "@chakra-ui/react";
import { CheckCircleIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { delete_todo, edit_todo } from "../redux/actions/action";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'




const TodoCard = ({ todo }) => {
  const [newTodo , setNewTodo] =  useState("");
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure()

       
 console.log(newTodo)
    
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TableContainer w="700px" mt="20px">
        <Table variant="striped" colorScheme="teal">
          <Tbody>
            <Tr>
              <Td
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <CheckCircleIcon />
                  {todo.text}
                </div>
                <WrapItem style={{ gap: "10px" }}>
                  <Button colorScheme="red"  onClick={()=> dispatch(delete_todo(todo.id))}>
                    <DeleteIcon />
                  </Button>
                  <Button onClick={onOpen}><EditIcon/></Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                 <ModalOverlay />
               <ModalContent>
              <ModalHeader></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Input placeholder='large size' size='lg' onChange={(e)=>setNewTodo(e.target.value)}
                value={newTodo} />
              </ModalBody>

            <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost' onClick={()=> dispatch(edit_todo(todo.id , newTodo))}>Save</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
                </WrapItem>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TodoCard;