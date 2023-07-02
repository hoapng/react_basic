import React from "react";
import axios from "axios";
import './ListUsers.scss'
class ListUsers extends React.Component {
    // componentDidMount(){
    //     axios.get('https://reqres.in/api/users?page=2')
    //     .then(res => {
    //         console.log('check res', res)
    //     })
    // }
    state = {
        listUsers: []
    }
    async componentDidMount(){
        let res = await axios.get('https://reqres.in/api/users?page=2')
        console.log('check res', res)
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    render(){
        let {listUsers} = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )
    }
}
export default ListUsers