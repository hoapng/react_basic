import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "./demo.css"
import "./demo.scss"
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
  handleOnClickDelete = (job) =>{
    console.log('handleOnClickDelete:',job)
    this.props.deleteAJob(job)
  }
  render() {
    // let name = this.props.name;
    // let age = this.props.age;
    // let {name, age, address arrJobs} = this.props;
    let {arrJobs} = this.props;
    let {showJobs} = this.state
    return (
      <>
        {/* <div>Child: {name} - {age} - {address}</div> */}
        {showJobs === false && 
        <div>
          <button className="btn-show"
          onClick={() => this.handleShowHide()}>
            Show
          </button>
          </div>}
        {showJobs &&
        <>
          <div className = 'jobs-list'>
          {
            arrJobs.map((item, index) => {
              return (
                <div>
                  {item.id} - {item.title} - {item.salary} <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                </div>
              )
            })
          }
          {/* <button onClick={() => this.handleShowHide()}>Hide</button> */}
        </div>
        <button className="btn-hide" onClick={() => this.handleShowHide()}>Hide</button>
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