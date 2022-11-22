import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { userAtom } from "../../store";
import APIManager from "../../Containers/api/axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_, setUser] = useAtom(userAtom);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user: {
        email: email,
        password: password
      },
    };
    
    
    try {
      const response = await APIManager.login(data);
      setUser(response.data.user);
      navigate('/')


    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <h1 className="title-form">Login</h1>
      <form onSubmit={handleSubmit} className="container-form">
        <label htmlFor="username">Email </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          placeholder="email"
        />
        <label htmlFor="password">Password</label>

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          id="password"
          placeholder="password"
        />

        <button>Sign Up</button>
      </form>
    </>
  );
}

export default LoginForm;
