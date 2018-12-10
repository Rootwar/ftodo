import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './styles.css';

import Todo from './Todo/index';

class FetchTodos extends PureComponent {
    static defaultProps = {
        todos: [],
        fetchTodos: Function.prototype,
        deleteTodo: Function.prototype,
        updateTodo: Function.prototype
    }

    static propTypes = {
        todos: PropTypes.array,
        fetchTodos: PropTypes.func,
        deleteTodo: PropTypes.func,
        updateTodo: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            todoList: []
        }

        this.setState = this.setState.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        const { fetchTodos } = this.props;

        fetchTodos();
    }

    handleDelete(id) {
        const { deleteTodo } = this.props;

        deleteTodo(id);
    }

    handleUpdate(id, state) {
        const { updateTodo } = this.props;

        updateTodo(id, state);
    }

    render() {
        const { todos } = this.props;
        const { handleDelete, handleUpdate } = this;

        return (
            <ul className="todo-wrap">
                {
                    todos.map(todo => {
                        return <Todo 
                            key={todo.id}
                            todo={todo}
                            remove={handleDelete}
                            change={handleUpdate} 
                        />;
                    })
                }
            </ul>
        );
    }
}

export default FetchTodos;
