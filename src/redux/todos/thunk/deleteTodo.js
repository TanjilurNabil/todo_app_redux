import { deleted } from "../actions";

export const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9001/todos/${todoId}`, {
      method: 'DELETE',
     
    });
    
    dispatch(deleted(todoId));
  };
};
