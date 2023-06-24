import { type } from "@testing-library/user-event/dist/type";
import React from "react";
class Car extends React.Component {
  // let name = '123';
  state = {
    name: 'Hoa'
  }
  click = () => {
    alert('Click')
  }
  change = (event) => {
    this.setState({name: event.target.value})
  }
  render() {
    
    return (
      <>
      <div className="first">
        <input value={this.state.name} type="text" onChange={(event) => this.change(event)}></input>
        Hi, I am {this.state.name}!
        </div>
      <div className="second">
        <button onClick={this.click}>Click</button>
      </div>
      </>
    );
  }
}
export default Car;