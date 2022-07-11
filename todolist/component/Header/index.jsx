import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import './index.css'
class Header extends Component {
    getDate=(e) => {

        // const {addObj} = this.props
        if(e.target.value.trim()===''){
            console.log(e.target.value);
            alert('输入不能为空！！！')
        }
        if(e.keyCode === 13){
            console.log(e);
            console.log(e.target.value);
            const newObj = {id:nanoid(),name:e.target.value,done:false}
            this.props.addTodo(newObj)
            e.target.value = ''
        }
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.getDate} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default Header;