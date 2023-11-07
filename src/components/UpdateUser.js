import { useParams } from "react-router-dom";
import UserForm from "./UserForm";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function UpdateUser() {
  const { id } = useParams();
  const [initialValue, setInitialValue] = useState({ name: "", email: "", pwd: "" });
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    Axios.get("https://merntrial.onrender.com/Route/updateUser/" + id)
      .then((res) => {
        if (res.status === 200) {
          const { name, email, pwd } = res.data;
          setInitialValue({ name, email, pwd });
        }
        else
          Promise.reject();
      })
      .catch((err) => alert(err));
  }, [id])

  const getState = (data) => {
    setNewData(data);
  }

  const handleSubmit = () => {
    const data = {name:newData[0], email:newData[1], pwd:newData[2]};
    Axios.put("https://merntrial.onrender.com/Route/updateUser/" + id, data)
    .then((res) => {
      if(res.status === 200)
        alert("Record modified successfully");
      else
        Promise.reject();
    })
    .catch((err) => alert(err));
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column mt-5 justify-content-center align-items-center">
      <h3>Modify your details</h3>
      <UserForm buttonTitle="Update"
        nameValue={initialValue.name}
        emailValue={initialValue.email}
        pwdValue={initialValue.pwd}
        getState={getState} />
    </form>
  )
}
