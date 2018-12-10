import { connect } from 'react-redux';

import CreateTodo from '../components/CreateTodo/index';
import { createTodo } from '../actions/Todos';


const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		saveTodo: (todo) => {
			dispatch(createTodo(todo));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
