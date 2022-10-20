import { ADD_TODO , DELETE , EDIT , ISCOMPLIT} from "./actionsType";

 export const add_todo = (newText) => {
    return {
         type : "ADD_TODO" ,  
         payload : {id: Math.random(), text: newText, isComplit: false}
    }
} ;

  export const delete_todo = (id) => {
    return {
    type : "DELETE" ,
    payload : {id}
 }
} ;
export const edit_todo = (id , newTodo) => {
    return {
        type : "EDIT" , 
        payload : {id,newTodo}
    }
};
export const isComplit_todo = (id) => {
    return {
        type : ISCOMPLIT , 
        payload : {id}
    }
}



