import React, { useState } from "react";

export default function Form(props) {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleClick = async (event)=>{
      event.preventDefault();
      
      //calling API
      const resp = await fetch(`https://api.github.com/users/${username}`);
      const data = await resp.json();
      
      //call the Function in App.js to add new user
      props.onClick(data);
      
  }

  return (
    <div
      style={{
        margin: "5px",
        padding: "5px",
        border: "1px solid orange",
        textAlign: "center",
      }}
    >
      <form>
        <input
          style={{ margin: "5px" }}
          type="text"
          placeholder="Enter Github Username.."
          value={username}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}> Submit </button>
      </form>
    </div>
  );
}
