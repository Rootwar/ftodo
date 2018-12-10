import update from 'immutability-helper';

import {
    FETCH_TODO_LIST,
    DELETE_THE_TODO,
    CHANGE_THE_TODO,
    CREATE_A_NEW_TODO
} from '../constans/Todos';

const defaultState = {
	todos: []
};

const todos = (state = defaultState, action) => {
	switch(action.type) {
	case FETCH_TODO_LIST:
		return update(state, {
			todos: {$set: action.response}
		});
    case CHANGE_THE_TODO: {
        let todos = state.todos.map(todo => {
            if (todo.id === action.response.id) {
                return action.response;
            } else {
                return todo;
            }
        });
        
        return update(state, {
            todos: {$set: todos}
        });
    }
	case DELETE_THE_TODO: {
        let todos = state.todos.filter(todo => {
            return todo.id !== action.response.id;
        });

        return update(state, {
            todos: {$set: todos}
        });
    }
	case CREATE_A_NEW_TODO:
		return update(state, {
            todos: {$push: [action.response]}
		});
	default:
		return state;
	}
};

export default todos;
