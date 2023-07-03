import logo from './logo.svg';
import './App.scss';
import Car from './Example/MyComponent';
import ListToDo from './Todos/ListToDo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Detail from './users/detail';
import Nav from './Nav/Nav';
import Home from './Example/Home';


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ListUsers from './users/ListUsers';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">        
        
        <Nav/>


        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ListToDo />} />
        <Route path="/about" element={<Car />} />
        <Route path="/users" element={<ListUsers />} />
        <Route path="/users/:id" element={<Detail />} />
          </Routes>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
    </BrowserRouter>
  );
}

export default App;
