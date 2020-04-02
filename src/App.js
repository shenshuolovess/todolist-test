import React, { Component } from 'react';
import './App.css';
import TodolistHeader from "./TodolistHeader";
import TodoList from './Todolist';

class App extends Component{
  render(){
    return (
      <div className="App">
        <TodolistHeader/>
        <TodoList/>
      </div>
    );
    }
}

export default App;
