import React, { useState, useEffect } from "react";
import Userdetails from "./Cruddetails";
import UserForm from "./Addusre";

const Crud = () => {
  const [userList, setUserList] = useState([]);

  const handleRemove = (userId) => {
    const updatedUsers = userList.filter((user) => user.id !== userId);
    setUserList(updatedUsers);
  };

  const addUser = (newUser) => {
    setUserList([...userList, newUser]);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://fakestoreapi.com/users");
      const data = await response.json();
      setUserList(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body ">
          <h2 className="text-center mb-3">Users table</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <Userdetails
                  key={user.id}
                  user={user}
                  handleRemove={handleRemove}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <UserForm addUser={addUser} />
    </div>
  );
};

export default Crud;
