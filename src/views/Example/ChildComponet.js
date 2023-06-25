import { type } from "@testing-library/user-event/dist/type";
import React from "react";
class Child extends React.Component {
  // let name = '123';
  state = {
    firstName: '',
    lastName: '',
    showJobs: false
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
  handleShowHide = () =>{
    this.setState({
      showJobs: !this.state.showJobs
    })
  }
  render() {
    // let name = this.props.name;
    // let age = this.props.age;
    let {name, age, address, arrJobs} = this.props;
    let {showJobs} = this.state
    return (
      <>
      {showJobs === false && <div><button onClick={() => this.handleShowHide()}>Show</button></div>}
        <div>Child: {name} - {age} - {address}</div>
        {showJobs &&
        <>
          <div className = 'jobs-list'>
          {
            arrJobs.map((item, index) => {
              return (
                <div>
                  {item.id}.{item.name}
                </div>
              )
            })
          }
          {/* <button onClick={() => this.handleShowHide()}>Hide</button> */}
        </div>
        <button onClick={() => this.handleShowHide()}>Hide</button>
        </>
        }
        
      </>
    );
  }
}
// const Child = (props) => {
//   let {name, age, address, arrJobs} = props;
//   return (
//           <>
//             <div>Child: {name} - {age} - {address}</div>
//             <div className = 'jobs-list'>
//               {
//                 arrJobs.map((item, index) => {
//                   return (
//                     <div>
//                       {item.id}.{item.name}
//                     </div>
//                   )
//                 })
//               }
//             </div>
//           </>
//         )
// }
export default Child