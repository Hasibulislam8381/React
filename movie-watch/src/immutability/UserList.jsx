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
    console.log(value);

    const userCopy = [...users];
    const found = userCopy.find((user) => user.id == userId);
    found.name = value;
    setUsers(userCopy);
  }

  return (
    <div className="flex flex-col">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              {user.name} lives is {user.address}
            </p>
            <button onClick={() => changeUser(user.id, "Random")}>
              change
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
