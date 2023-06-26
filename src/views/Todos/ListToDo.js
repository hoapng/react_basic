import React from "react";
import './ListToDO.scss'
import Add from "./Add";
import { toast } from "react-toastify";

class ListToDo extends React.Component {
    state ={
        list: [
            {id: '1', title: 'Homework'},
            {id: '2', title: 'Housework'},
            {id: '3', title: 'work'},
        ]
    }
    addNewToDo = (todo) => {
        this.setState({
            list: [...this.state.list, todo]
        })
        toast.success('Success')
    }

    render(){
        let { list } = this.state
        return(
            <>
                <div className="list-todo-container">
                    <Add addNewToDo = {this.addNewToDo}/>
                    <div className="list-todo-content">
                        {list && list.length>0 && 
                        list.map((item, index) => {
                            return(
                                <div className="todo-child" key={item.id}>
                                    <span>{index+1} - {item.title}</span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Del</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}
export default ListToDo