import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users({ setIsDrawerOpen }) {
  const [allUsers, loading] = useGetAllUsers();

  return (
    <div>
      <hr className="border-t border-white my-2" />
      <div className="py-2 flex-1 overflow-y-auto" style={{ maxHeight: "calc(84vh - 10vh)" }}>
        {allUsers.map((user, index) => (
          <User key={index} user={user} onClick={() => setIsDrawerOpen(false)} /> // Close drawer on selection
        ))}
      </div>
    </div>
  );
}

export default Users;
