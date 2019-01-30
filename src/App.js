import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import {TodoApp} from "./TodoApp";

class App extends Component {
    render() {


        return (
            <div className="App">
                <header className="App-header">
                    <TodoApp/>
                </header>
            </div>
        );
    }
}

export default App;
