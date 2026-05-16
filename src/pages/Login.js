import React from "react";

function Login() {
  return (
    <div>
      <center>
        <h1>Login Page</h1>

        <input type="text" placeholder="Enter Username" />
        <br /><br />

        <input type="password" placeholder="Enter Password" />
        <br /><br />

        <button>Login</button>
      </center>
    </div>
  );
}

export default Login;