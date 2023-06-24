import { type } from "@testing-library/user-event/dist/type";
import Child from "./ChildComponet";
import React from "react";
class Car extends React.Component {
  // let name = '123';
  state = {
    firstName: '',
    lastName: ''
  }
  handleChangeFirstName = (event) => {
    this.setState({
        firstName: event.target.value
    })
  }
  handleChangeLastName = (event) => {
    this.setState({
        lastName: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log('>>> check data input: ', this.state)
    alert('click')
  }
  render() {
    
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label><br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label><br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br /><br />
          <input type="submit"
            onClick={(event) => this.handleSubmit(event)} />
        </form>
        <Child name = {'one'} age = {'25'}></Child>
      </>
    );
  }
}
export default Car