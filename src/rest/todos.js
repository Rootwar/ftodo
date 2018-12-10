import axios from 'axios';
import config from '../config/main'

//*** Post request for creating a new todo ***//
export function insertTodo(todo) {
	const URL = `${config.api}/todos`;

	return axios.post(URL, todo, {
		headers: {
            'Content-Type': 'application/json'
        }
	});
}

//*** Get request for fetching list of todos ***//
export function fetchTodos() {
	const URL = `${config.api}/todos`;

	return axios.get(URL);
}

//*** Delete request for deleting the todo ***//
export function deleteTodo(id) {
	const URL = `${config.api}/todos/${id}`;

	return axios.delete(URL);
}

//*** Put request for changin state of the todo ***//
export function changeTodo(id, todoState) {
	const URL = `${config.api}/todos/${id}`;

	return axios.put(URL, todoState, {
		headers: {
            'Content-Type': 'application/json'
        }
	});
}




