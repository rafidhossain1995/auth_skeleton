import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import {login} from "../util/fireBaseFunctions"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const API = apiURL();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post(`${API}/api/users`, { id: res.user.uid, email });
      let res = await login(email, password)
      history.push("/");
    } catch (err) {}
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
          autoCapitalize = "on"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
