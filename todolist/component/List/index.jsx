import React, { Component } from 'react';
import Item from '../Item';
import './index.css'


class List extends Component {
    render() {
        const {todos,delTodo,changDone} = this.props;
        
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => 
                    <Item key={todo.id} {...todo} delTodo = {delTodo} changDone={changDone}/>
                    )
                }
                
            </ul>
        );
    }
}

export default List;