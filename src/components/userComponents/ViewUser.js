import React from "react";
import User from "./User";

export default ({ users, deleteUser, editUser }) => {
  return users.map((user, index) => (
    <User user={user} deleteUser={deleteUser} editUser={editUser} key = {index} index={index} length = {users.length}/>
  ));
};
