import React from "react";
import Header from "./Header";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  // use for two way binding
  const [title, setTaskTitle] = useState("");
  const [description, setTaskDescription] = useState("");
  const [category, setTaskCategory] = useState("");
  const [date, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");

  // set intial value aS  empty obj {}: to make obj
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log({ title, category, date, asignTo });

    setNewTask({
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    });

    // const data = JSON.parse(localStorage.getItem("Employees"));
    // console.log(data)
    const data = userData;

    data.forEach(function (elem) {
      // console.log(elem.firstName)
      if (asignTo == elem.firstName) {
        // console.log(elem.firstName)

        // push task in array
        elem.tasks.push(newTask);
        // console.log(elem);

        elem.taskCount.newTask = elem.taskCount.newTask + 1
      }
    });

    // add assign data to localStorage
    // localStorage.setItem("employees", JSON.stringify(data));
    setUserData(data);
    console.log(data);

    setTaskTitle("");
    setTaskCategory("");
    setTaskDate("");
    setTaskDescription("");
    setAsignTo("");
  }

  return (
    <div className="my-20">
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className="bg-[#7863ac] rounded-b-4xl rounded-r-4xl text-white h-full flex justify-between px-5 py-1"
      >
        <div className="w-[45%]">
          <div className="my-2">
            <h2 className="font-medium py-0.5 ">Task Title</h2>
            <input
              value={title}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="bg-[#8b77b6] px-2 py-1 w-full outline-none text-xs rounded-[3px]"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div className="my-2 ">
            <h2 className=" font-medium py-0.5 ">Date</h2>
            <input
              value={date}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="bg-[#8b77b6] px-2 py-1 w-full text-xs rounded-[3px]"
              type="date"
              placeholder="Make a UI design"
            />
          </div>
          <div className="my-2 ">
            <h2 className="font-medium py-0.5 ">Assign To</h2>
            <input
              value={asignTo}
              onChange={(e) => {
                setAsignTo(e.target.value);
              }}
              className="bg-[#8b77b6] px-2 py-1 w-full text-xs rounded-[3px]"
              type="text"
              placeholder="Employee Name..."
            />
          </div>
          <div className="my-2 ">
            <h2 className="font-medium py-0.5 ">Category</h2>
            <input
              value={category}
              onChange={(e) => {
                setTaskCategory(e.target.value);
              }}
              className="bg-[#8b77b6] px-2 py-1 w-full text-xs rounded-[3px]"
              type="text"
              placeholder="Design, Development etc..."
            />
          </div>
        </div>
        <div className="w-[45%]">
          <div className="my-2 ">
            <h2 className="font-medium py-0.5">Description</h2>
            <textarea
              value={description}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="bg-[#8b77b6] px-2 py-1 w-full h-45 text-xs rounded-[3px]"
              placeholder="Detailed description of your newTask. [Max 500 words]"
              name="description"
              cols="30"
              rows="10"
              id="description"
              maxLength={500}
            ></textarea>
          </div>
          <div className="bg-[#4e0c76] justify-center flex rounded-[2px] text-[15px] my-2 p-1">
            <button type="submit">Create Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
