import React from "react";
import Color from "../HOC/Color";
import logo from "../../assets/images/logo512.png"

class Home extends React.Component {
    render(){
        return(
            <>
            <div>Hello from Hompage</div>
            <img src = {logo} style={{width: '30%', height: '30%'}}></img>
            </>
        )
    }
}
export default Color(Home)