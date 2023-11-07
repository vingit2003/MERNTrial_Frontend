import { useState } from "react";
import UserForm from "./UserForm";
import Axios from "axios";

function CreateUser() {

  const [arr, setArr] = useState([]);
  const title = "Register";

  const getState = (data) => {
    setArr(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name: arr[0], email: arr[1], pwd: arr[2] };
    Axios.post("https://merntrial.onrender.com/Route/createUser", data)
      .then((res) => {
        if (res.status === 200)
          alert("Record added successfully!");
        else
          Promise.reject();
      })
      .catch((err) => alert(err));
      event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column mt-5 justify-content-center align-items-center">
      <h3>Register now</h3>
      <UserForm getState={getState} buttonTitle={title} />
    </form>
  )
}

export default CreateUser;