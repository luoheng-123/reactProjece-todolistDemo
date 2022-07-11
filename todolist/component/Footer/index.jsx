import React, { Component } from 'react';
import './index.css'
class Footer extends Component {
    selectAll = (e) => {
        this.props.checkedAllTodos(e.target.checked)
        
    }
    delDone=() => {
        this.props.delDone()
    }
    render() {
        const {todos} = this.props
        const countDone = todos.reduce((pre,item) => {
            return pre + (item.done?1:0)
        },0)
       
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.selectAll} checked = {todos.length === countDone && todos.length!==0?true:false}/>
                    <span>
                        <span>已完成{countDone}</span>/全部{todos.length}
                    </span>
                </label>
                <button className="btn btn-danger" onClick={this.delDone}>清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;