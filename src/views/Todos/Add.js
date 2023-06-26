import React from "react";
import { toast } from "react-toastify";

class Add extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClickAdd = (event) => {
        if(!this.state.title){
            toast.info('Missing');
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewToDo(todo)
        this.setState({
            title: ''
        })
    }
    render(){
        let {title} = this.state
        return(
            <>
            <div className="add-todo">
                <input type="text" value={title}
                onChange={(event) => this.handleOnChangeTitle(event)}></input>
                <button type="button" className="add"
                onClick={(event) => this.handleClickAdd(event)}>Add</button>
            </div>
            </>
        )
    }
}
export default Add