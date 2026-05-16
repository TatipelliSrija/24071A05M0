import React from "react";

function Enquiry() {
  return (
    <div>
      <center>
        <h1>Enquiry Page</h1>

        <input type="text" placeholder="Enter Your Name" />
        <br /><br />

        <input type="email" placeholder="Enter Email" />
        <br /><br />

        <textarea placeholder="Enter Enquiry"></textarea>
        <br /><br />

        <button>Submit</button>
      </center>
    </div>
  );
}

export default Enquiry;