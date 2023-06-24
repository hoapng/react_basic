import { type } from "@testing-library/user-event/dist/type";
import React from "react";
class Child extends React.Component {
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
    // let name = this.props.name;
    // let age = this.props.age;
    let {name, age, address, arrJobs} = this.props;
    return (
      <>
        <div>Child: {name} - {age} - {address}</div>
        <dic className = 'jobs-list'>
          {
            arrJobs.map((item, index) => {
              return (
                <div>
                  {item.id}.{item.name}
                </div>
              )
            })
          }
        </dic>
      </>
    );
  }
}
export default Child