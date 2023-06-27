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
        ],
        edit: {}
    }
    addNewToDo = (todo) => {
        this.setState({
            list: [...this.state.list, todo]
        })
        toast.success('Success')
    }
    handleDeleteToDo = (todo) => {
        console.log(todo)
        let currentToDos = this.state.list;
        currentToDos = currentToDos.filter(item => item.id !== todo.id);
        this.setState({
            list: currentToDos
        })
    }
    handleEditToDo = (todo) => {
        let {edit, list} = this.state
        let isEmptyOjb = Object.keys(edit).length ===0;
        //save
        if(isEmptyOjb === false && edit.id === todo.id) {
            let listCopy = [...list];
            let objIndex = listCopy.findIndex((item => item.id === todo.id));

            listCopy[objIndex].title = edit.title;

            this.setState({
                list: listCopy,
                edit: {}
            })
            return;
        }
        //edit
        this.setState({
            edit: todo
        })
    }
    handleOnChangeEditToDo = (event) => {
        let editCopy = {...this.state.edit};
        editCopy.title = event.target.value;
        this.setState({
            edit: editCopy
        })
    }

    render(){
        let { list, edit } = this.state
        let isEmptyOjb = Object.keys(edit).length ===0; 
        return(
            <>
                <div className="list-todo-container">
                    <Add addNewToDo = {this.addNewToDo}/>
                    <div className="list-todo-content">
                        {list && list.length>0 && 
                        list.map((item, index) => {
                            return(
                                <div className="todo-child" key={item.id}>
                                    {isEmptyOjb === true ?
                                    <span>{index+1} - {item.title}</span>
                                    :
                                    <>
                                    {edit.id === item.id ?
                                    <span>
                                        {index+1} - <input value={edit.title} onChange={(event) => this.handleOnChangeEditToDo(event)}></input>
                                    </span>
                                    :
                                    <span>{index+1} - {item.title}</span>
                                    }
                                    </>
                                    }
                                    <button className="edit"
                                    onClick={() => this.handleEditToDo(item)}>
                                        {isEmptyOjb === false && edit.id === item.id ? 'Save': 'Edit'}
                                        </button>
                                    <button className="delete"
                                    onClick={() => this.handleDeleteToDo(item)}>Del</button>
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