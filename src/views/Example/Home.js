import React from "react";
import Color from "../HOC/Color";
import logo from "../../assets/images/logo512.png"
import { connect } from "react-redux";

class Home extends React.Component {
    handleDeletUser = (user) => {
        // console.log('check', user)
        this.props.deleteUserRedux(user)
    }
    handleAddUser = () => {
        this.props.addUserRedux()
    }
    render(){
        // console.log('check', this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        
        return(
            <>
            <div>Hello from Hompage</div>
            <img src = {logo} style={{width: '30%', height: '30%'}}></img>
            <div>
                {listUsers && listUsers.length > 0 &&
                listUsers.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {index + 1} - {item.name} 
                            <button onClick={() => this.handleDeletUser(item)}>x</button>
                            
                        </div>
                    )
                })}
                <button onClick={() => this.handleAddUser()}>Add</button>
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {dataRedux: state.users} 
}
const mapDiSpatchToDo = (dispatch) => {
    return{
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'ADD_USER'})
    }
}
export default connect(mapStateToProps, mapDiSpatchToDo)(Color(Home))