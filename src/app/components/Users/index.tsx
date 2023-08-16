import React, { useState, useEffect } from "react";

import UsersCard from "../Users/UsersCard";

import { users } from "../../store/users/action";
import { useAppDispatch, useAppSelector } from "../../store";

import { User } from "../../../entities/user";
import appConfig from "../../configs/appConfig.json"

import "./index.scss";

const Users = () => {
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector((state) => state.usersSlice.users);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(appConfig.ASC);

  const filteredUsers = allUsers.filter((user: User) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const compareResult = a.username.localeCompare(b.username);
    return sortOrder === appConfig.ASC ? compareResult : -compareResult;
  });

  useEffect(() => {
    (async () => {
      await dispatch(users());
    })();
  }, []);

  return ( <div className="container">
    <div className="search-sort">
      <input
          type="text"
          placeholder="Search by userName"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value={appConfig.ASC}>Sort Ascending</option>
        <option value={appConfig.DESC}>Sort Descending</option>
      </select>
    </div>
        <div className="users">
          {sortedUsers.map((user) => {
            return <UsersCard key={user.id} user={user} />;
          })}
        </div>
    </div>
  );
};

export default Users;
