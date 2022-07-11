import React, { Component } from 'react';
import Header from './component/Header';
import List from './component/List';
import Footer from './component/Footer';
import './App.css'
class App extends Component {
    state = {
        todos:[
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'打代码',done:false},
            {id:'004',name:'看书',done:true},
        ]
    }
    addTodo = (todoObj) => {
        const {todos} = this.state
        this.setState({todos:[todoObj,...todos]})
    }
    
    delTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter((item) => {
            return item.id !== id
        })
        this.setState({todos:newTodos})
    }

    checkedAllTodos = (isDone) => {
        const {todos} = this.state
        const newTodos = todos.map((item) => {
            return {...item,done:isDone}
        })
        this.setState({todos:newTodos})
    }

    changDone = (id) => {
        const {todos} = this.state
        let newTodos = todos.map((item) => {
            if(item.id === id){
                item.done = !item.done
            } 
            return item
            
        })
        this.setState({todos:newTodos})
    }

    countDone = () => {
        let count =0
        const {todos} = this.state
        for(let i =0;i<todos.length;i++){
            if(todos[i].done){
                count++
            }
        }
        return count;
    }

    delDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter((item) => {
            return item.done === false 
        }) 
        this.setState({todos:newTodos})
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo = {this.addTodo}/>
                    <List todos = {this.state.todos} delTodo = {this.delTodo} changDone = {this.changDone}/>
                    <Footer checkedAllTodos = {this.checkedAllTodos} todos = {this.state.todos} delDone = {this.delDone}/>
                </div>
            </div>    
        );
    }
}

export default App;