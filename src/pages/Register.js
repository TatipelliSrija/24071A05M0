import React from "react";
function Register() {
  return (
    <div className="container">
      <h1>Register</h1>
      <input placeholder="Name" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <input placeholder="Phone" /><br /><br />
      <input placeholder="Address" /><br /><br />
      <input placeholder="City" /><br /><br />
      <input placeholder="Password" type="password" /><br /><br />
      <input placeholder="Confirm Password" type="password" /><br /><br />
      <button>Register</button>
    </div>
  );
}

export default Register;