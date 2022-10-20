import { Button, Input, WrapItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../redux/actions/action";

const Addtodo = () => {
    const [newText , setNewText] = useState("");
    const dispatch = useDispatch();
   
    console.log(newText)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input
        style={{ borderRadius: "5px 0 0 5px" }}
        w="500px"
        placeholder="Add todo"
        onChange={(e)=>setNewText(e.target.value)}
        value={newText}
      />
      <WrapItem>
        <Button style={{ borderRadius: "0 5px 5px 0" }} colorScheme="whatsapp" onClick={()=> dispatch(add_todo(newText))}>
          Add Todo
        </Button>
      </WrapItem>
    </div>
  );
};

export default Addtodo;
