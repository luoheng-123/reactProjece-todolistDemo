import React, { Component } from 'react';
import './index.css'


class Item extends Component {
    delTodo = (id) => {
        this.props.delTodo(id)
    }
    changDone = (id) => {
        this.props.changDone(id)
        //改变input的值
    }
    render() {
        const{id,name,done} = this.props
        return (
            <li>
                <label>
                    <input type="checkbox" checked = {done} onChange={() => {this.changDone(id)}}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" onClick={() => {this.delTodo(id)}}>删除</button>
            </li>
        );
    }
}

export default Item;