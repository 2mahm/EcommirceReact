import React from "react";
function Userdetails({ user, handleRemove }) {
  const Removefunction = () => {
    handleRemove(user.id);
  };
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "20px",
        }}
      >
        <a
          onClick={() => {
            Removefunction(user.id);
          }}
          className="btn btn-danger"
        >
          Remove
        </a>
      </td>
    </tr>
  );
}
export default Userdetails;
