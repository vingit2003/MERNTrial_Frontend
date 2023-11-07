import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import Home from './components/Home';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createUser' element={<CreateUser />} />
          <Route path='/userList' element={<UserList />} />
          <Route path='/updateUser/:id' element={<UpdateUser />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
