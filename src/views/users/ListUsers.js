import React from "react";
import axios from "axios";
class ListUsers extends React.Component {
    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
            console.log('check res', res)
        })
    }
    render(){
        return(
            <div>Hello from user</div>
        )
    }
}
export default ListUsers