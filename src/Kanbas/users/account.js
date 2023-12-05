import * as client from "./client";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };

  const save = async () => {
    await client.updateUser(account);
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <input value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <div className="d-flex flex-column">
            <label htmlFor="username">Update Username:</label>
            <input id="username" value={account.username}
                onChange={(e) => setAccount({ ...account,
                username: e.target.value })}/>
            <label htmlFor="password">Update Password:</label>
            <input id="password" value={account.password}
                onChange={(e) => setAccount({ ...account,
                password: e.target.value })}/>
         <button onClick={save} className="btn btn-primary w-100 mb-2">
         Save
         </button>
         </div>
         <button onClick={signout} className="btn btn-danger w-100 mb-2">
            Signout
        </button>
         </div>
      )}
        <Link to="/Kanbas/users" className="btn btn-warning w-100">
           All Users
        </Link>
        </div>
    );
}
export default Account;