import "./App.css";
import React, { useState, useEffect } from "react";
import mail from "./assets/email.svg";
import location from "./assets/location.svg";
import phone from "./assets/phone.svg";





function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    
    const res = await fetch("https://randomuser.me/api/");
    const json = await res.json();
    setUsers(json.results)
    console.log(json.results[0])
  
     
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = () => {
    fetchUsers()
  }

  return (
    <div className="main">
      {users.length > 0 && (
        <div className="card-container">
          <div className="card-header">
            <img src={users[0].picture.large} alt={users[0].name.first} />
          <h2>
            {users[0].name.title} {users[0].name.first} {users[0].name.last}
          </h2>
          </div>
          <div className="card-mail">
          <img src={mail} alt="mail" />
          <h3>{users[0].email}</h3>
          </div>
          <div className="card-phone">
          <img src={phone} alt="phone" />
          <h3>{users[0].phone}</h3>
          </div>
          <div className="card-location">
          <img src={location} alt="location" />
          <h3>{users[0].location.city} - {users[0].location.country}</h3>
          </div>
          <div className="card-footer">
            <h4>Age: {users[0].dob.age}</h4>
            <h4>Register Date: {users[0].registered.date.split("T")[0]}</h4>
          </div>
          
        </div>
      )}
      <button onClick={handleClick}>Random User</button>
    </div>
  );
}
export default App;