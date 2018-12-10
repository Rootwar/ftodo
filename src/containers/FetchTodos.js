import { connect } from 'react-redux';

import FetchTodos from '../components/FetchTodos/index';
import { fetchTodoList, removeTheTodo, updateTheTodo } from '../actions/Todos';


const mapStateToProps = (state) => {
	return {
        todos: state.todos.todos
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTodos: () => {
			dispatch(fetchTodoList());
        },
        deleteTodo: (id) => {
			dispatch(removeTheTodo(id));
        },
        updateTodo: (id, state) => {
			dispatch(updateTheTodo(id, state));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchTodos);
