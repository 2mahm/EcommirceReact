import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nextId, setNextId] = useState(11);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: nextId,
      username,
      email,
      phone,
    };

    setNextId(nextId + 1);

    addUser(newUser);

    setUsername("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 mt-4">
        <label htmlFor="username" className="form-label"> Username:</label>
        <input type="text" id="username" className="form-control"value={username} onChange={(e) => setUsername(e.target.value)} required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email: </label>
        <input type="email" id="email" className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-outline-primary px-3"
        style={{ display: "block", width: "15rem", margin: "30px auto" }}
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
