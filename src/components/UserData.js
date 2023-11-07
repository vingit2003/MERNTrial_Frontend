import Axios from "axios";
import { Link } from "react-router-dom";

export default function UserData(props) {

    const { _id, name, email, pwd } = props.obj;

    const handleClick = () => {
        Axios.delete("https://merntrial.onrender.com/Route/deleteUser/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully!");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    return (
        <tr className="text-center">
            <td>{name}</td>
            <td>{email}</td>
            <td>{pwd}</td>
            <td className="d-block justify-content-center">
                <Link to={"/updateUser/" + _id} className="text-white text-decoration-none">
                    <button className="btn btn-success mx-4 my-sm-2">
                        Modify
                    </button>
                </Link>
                <button onClick={handleClick} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}
