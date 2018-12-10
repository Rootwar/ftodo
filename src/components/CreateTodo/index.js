import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './styles.css';

class CreateTodo extends PureComponent {
    static defaultProps = {
        saveTodo: Function.prototype
    }

    static propTypes = {
        saveTodo: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            todoTask: ''
        }

        this.setState = this.setState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { setState } = this;

        setState({
            todoTask: e.target.value
        })
    }

    handleSubmit(e) {
        const { setState } = this;
        const { saveTodo} = this.props;
        const { todoTask } = this.state;

        saveTodo({
            task: todoTask
        });

        e.preventDefault();

        setState({
            todoTask: ''
        })
    }

    render() {
        const { todoTask } = this.state;
        const { handleSubmit, handleChange } = this;

        return (
            <form className="todo-form" onSubmit={handleSubmit}>
                <input className="todo-text"
                        value={todoTask}
                        type="text"
                        maxLength="100"
                        onChange={handleChange}
                        placeholder="What needs to be done?" />
                <button className="todo-add" type="submit">Add Todo</button>
            </form>
        );
    }
}

export default CreateTodo;
