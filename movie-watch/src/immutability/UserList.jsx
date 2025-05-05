import { func } from "prop-types";
import React from "react";
import { useState } from "react";

function UserList() {
  const [users, setUsers] = useState([
    {
      id: crypto.randomUUID(),
      name: "Tapas",
      address: "banglore",
    },
  ]);

  function changeUser(userId, value) {
    const newUser = [...users];
    console.log(newUser);
    const foundRow = newUser.find((user) => user.id == userId);
    foundRow.name = value;
    setUsers(newUser);
  }
  function addUser() {
    const newUser = {
      id: crypto.randomUUID(),
      name: "Ebrahim",
      address: "Hakimpur",
    };
    setUsers([...users, newUser]);
  }

  return (
    <div className="flex flex-col">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              {user.name} lives in {user.address}
            </p>
            <button
              className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
              onClick={() => changeUser(user.id, "Random")}
            >
              {" "}
              change
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-purple-600 cursor-pointer hover:bg-purple-950 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        onClick={() => addUser()}
      >
        {" "}
        Add new
      </button>
    </div>
  );
}

export default UserList;
