import React from "react";
import Color from "../HOC/Color";
import logo from "../../assets/images/logo512.png"
import { connect } from "react-redux";

class Home extends React.Component {
    render(){
        console.log('check', this.props.dataRedux)
        return(
            <>
            <div>Hello from Hompage</div>
            <img src = {logo} style={{width: '30%', height: '30%'}}></img>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {dataRedux: state.users} 
}
export default connect(mapStateToProps)(Color(Home))