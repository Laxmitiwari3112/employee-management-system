import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(authData.employees)
  return (
    <div className="bg-[#262424] p-5 overflow-auto h-60">
      <div className="flex justify-between bg-red-800 text-white font-semibold text-xs md:text-xl rounded-xl my-2 px-5 py-4">
        <h2 className="w-[20%] ">Employee_Name</h2>
        <h2 className="w-[20%] ">New_Task</h2>
        <h2 className="w-[20%] ">Active_Task</h2>
        <h2 className="w-[20%] ">Completed_Task</h2>
        <h2 className="w-[20%] ">Failed_Task</h2>
      </div>

      <div>
        {userData.map(function (elem, idx) {
          return(
          <div
            key={idx}
            className="flex justify-between border-2 border-red-900 text-white font-medium rounded-xl my-2 px-5 py-2"
          >
            <h2 className="w-[20%] ">{elem.firstName}</h2>
            <h3 className="w-[20%] text-blue-600">{elem.taskCount.newTask}</h3>
            <h3 className="w-[20%] text-yellow-400">{elem.taskCount.active}</h3>
            <h3 className="w-[20%] text-green-600">
              {elem.taskCount.completed}
            </h3>
            <h3 className="w-[20%] text-red-800">{elem.taskCount.failed}</h3>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default AllTask;
