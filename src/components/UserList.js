import Axios from "axios";
import { useEffect, useState } from "react";
import UserData from "./UserData";

function UserList() {

  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("https://merntrial.onrender.com/Route/")
      .then((res) => {
        if (res.status === 200)
          setArr(res.data);
        else
          Promise.reject();
      })
      .catch((err) => alert(err));
  }, [])

  const ListItems = () => {
    return arr.map((val, index) => {
      return <UserData obj={val} />
    })
  }

  return (
    <div>
      <table className="table table-bordered table-striped table-success w-50 d-box mx-auto mt-5">
        <thead>
          <tr>
            <th className="text-center">Username</th>
            <th className="text-center">Email</th>
            <th className="text-center">Password</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {ListItems()}
        </tbody>
      </table>
    </div>
  )
}

export default UserList;