import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // //  to use localStorage
  const [user, SetUser] = useState(null);
  const [loggedInUserData, SetLoggedInUserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);
  // console.log(authData)

  // useEffect((authData) => {
  //   if(authData){
  //     const loggedInUserData = localStorage.getItem("loggedInUserData")
  //     if(loggedInUserData){
  //       SetUser(loggedInUserData.role)
  //     }
  //   }
  // }, [authData])

  useEffect(() => {
    // localStorage.clear()
    const loggedInUserData = localStorage.getItem("loggedInUserData");

    if (loggedInUserData) {
      const userData = JSON.parse(loggedInUserData);
      // console.log('jdbh')
      SetUser(userData.role);
      SetLoggedInUserData(userData.data);
      // console.log(userData);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      SetUser("admin");
      localStorage.setItem("loggedInUserData", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        SetUser("employee");
        SetLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUserData",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("invalid credentials");
    }
    // if(email == 'admin@me.com' && password == '123'){
    //     SetUser('admin')
    // }else if(email == 'user@me.com' && password == '123'){
    //   SetUser('employee')
    // }
    // else{
    //   alert("invalid credentials")
    // }

    // if(email == 'admin@me.com' && password == '123'){
    //     console.log("This is an admin")
    // }else if(email == 'user@me.com' && password == '123'){
    //   console.log('this is user')
    // }
    // else{
    //   alert("invalid credentials")
    // }
  };
  // handleLogin('user@me.com', 123)

  // const data = useContext(AuthContext);
  // console.log(data)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={SetUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={SetUser} data={loggedInUserData} />
      ) : null}

      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
