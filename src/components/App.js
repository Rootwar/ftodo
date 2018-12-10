import React, { PureComponent } from 'react';

import './styles.css';

import CreateTodo from '../containers/CreateTodo';
import FetchTodos from '../containers/FetchTodos';

class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <header>
                    <div className="outside-wrap">
                        <h1 className="title">TODOS</h1>
                        <CreateTodo />
                    </div>
                </header>
                <main>
                    <div className="outside-wrap">
                        <FetchTodos />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
