import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Employee from "./components/Dashboard/Employee/Employee";
import Admin from "./components/Dashboard/admin/Admin";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      console.log("This is Admin", email, password);
    } else if (
      authData.employees.find((e) => email == e.email && password == e.password)
    ) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
      console.log("This is User", email, password, user);
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <Admin />}
      {user === "employee" && <Employee />}
    </>
  );
};

export default App;
