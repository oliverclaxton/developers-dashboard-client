import React, { useState } from "react";
import { login } from "../store/user/actions";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginForm = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={submitLoginForm}>
        <div>
          <label>Email:</label>
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <label>Password:</label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}