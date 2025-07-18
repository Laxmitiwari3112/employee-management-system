import React from "react";
import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div className="h-[50%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5">
      {/* <div className="flex-shrink-0 w-[200px] bg-blue-700 py-6 px-5 rounded-xl">
        <div className="flex items-center justify-between">
          <h2 className="bg-red-500 px-2 py-1 text-xs rounded-se-xl">High</h2>
          <h2 className="font-semibold text-xs">20 Feb 2025</h2>
        </div>
        <div className="mt-6">
          <h2 className="font-bold text-xl">Lorem ipsum dolor </h2>
          <h3 className="text-s mt-3">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
      </div> */}

      {/* <AcceptTask/>
      <NewTask/>
      <CompleteTask/>
      <FailedTask/> */}

      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data = {elem}/>; 
        }
        if (elem.newTask) {
          return <NewTask key={idx} data = {elem}/>;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data = {elem}/>;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data = {elem}/>;
        }
      })}
    </div>
  );
};

export default TaskList;
