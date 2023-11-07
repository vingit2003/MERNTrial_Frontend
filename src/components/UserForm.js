import { useEffect, useState } from "react";

function UserForm(props) {
  const [name, setName] = useState(props.nameValue);
  const [email, setEmail] = useState(props.emailValue);
  const [pwd, setPwd] = useState(props.pwdValue);

  useEffect(() => {
    setName(props.nameValue);
    setEmail(props.emailValue);
    setPwd(props.pwdValue);
  }, [props.nameValue, props.emailValue, props.pwdValue]);

  const arr = [name, email, pwd];

  const handleClick = () => {
    props.getState(arr);
  }

  return (
    <div className="w-25 mt-4">
      <label>Username:</label>
      <input defaultValue={props.nameValue} onChange={(event) => setName(event.target.value)} placeholder="Username" className="form-control my-2" />
      <label>Email:</label>
      <input defaultValue={props.emailValue} onChange={(event) => setEmail(event.target.value)} placeholder="Email" type="" className="form-control my-2" />
      <label>Password:</label>
      <input defaultValue={props.pwdValue} onChange={(event) => setPwd(event.target.value)} placeholder="Password" type="password" className="form-control my-2" />
      <button onClick={handleClick} type="submit" className="btn btn-success my-3 d-block mx-auto">{props.buttonTitle}</button>
    </div>
  )
}

export default UserForm;
