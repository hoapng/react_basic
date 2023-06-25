import { type } from "@testing-library/user-event/dist/type";
import Child from "./ChildComponet";
import React from "react";
import AddComponent from "./AddComponent"
class Car extends React.Component {
  // let name = '123';
  state = {
    // firstName: '',
    // lastName: '',
    arrJobs: [
      {id: '1', title: 'Dev', salary: '500'},
      {id: '2', title: 'Tester', salary: '1000'},
    ]
  }
  addNewJob = (job) =>{
    console.log('>>>Check:',job)
    this.setState({
      arrJobs: [...this.state.arrJobs, job]
    })
  }
  // handleChangeFirstName = (event) => {
  //   this.setState({
  //       firstName: event.target.value
  //   })
  // }
  // handleChangeLastName = (event) => {
  //   this.setState({
  //       lastName: event.target.value
  //   })
  // }
  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log('>>> check data input: ', this.state)
  //   alert('click')
  // }
  render() {
    
    return (
      <>
      <AddComponent addNewJob = {this.addNewJob}></AddComponent>
        {/* <form>
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
        </form> */}
        <Child 
          name = {'Hoa'} 
          age = {'25'} 
          address = {'Hà Nội'}
          arrJobs = {this.state.arrJobs}></Child>
      </>
    );
  }
}
export default Car