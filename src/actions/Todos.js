import {
    FETCH_TODO_LIST,
    DELETE_THE_TODO,
    CHANGE_THE_TODO,
    CREATE_A_NEW_TODO
} from '../constans/Todos';

import {
    insertTodo,
    fetchTodos,
    deleteTodo,
    changeTodo
} from '../rest/todos';

//*** Action creator for fetching the todo list ***//
export const fetchTodoList = () => (dispatch) => {
	return fetchTodos().then(response => {
		dispatch({type: FETCH_TODO_LIST, response: response.data});
	});
};

//*** Action creator for creating a new todo ***//
export const createTodo = (todo) => (dispatch) => {
	return insertTodo(todo).then(response => {
		dispatch({type: CREATE_A_NEW_TODO, response: response.data});
	});
};

//*** Action creator for deleting the todo ***//
export const removeTheTodo = (id) => (dispatch) => {
	return deleteTodo(id).then(response => {
		dispatch({type: DELETE_THE_TODO, response: response.data});
	});
};

//*** Action creator for updating the todo ***//
export const updateTheTodo = (id, todoState) => (dispatch) => {
	return changeTodo(id, todoState).then(response => {
		dispatch({type: CHANGE_THE_TODO, response: response.data});
	});
};


