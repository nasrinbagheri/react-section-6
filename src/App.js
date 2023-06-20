import React from "react";
import AddUser from "./components/Users/AddUser";
import { useState } from "react";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const addUserHandler = (userData) => {
    console.log(userData)
    const userIdData={...userData,id:Math.random().toString()}
    setUsers((prevUsers) => {
      const test = [...prevUsers];
      test.unshift(userIdData);
      return test;
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList items={users}></UsersList>
    </div>
  );
}

export default App;
