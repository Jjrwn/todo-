import { IoMdAdd } from "react-icons/io";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { useTasks } from "../components/TaskContext";

const MyTasks = () => {
  const { tasks, addTask, deleteTask, toggleCompletion, markImportant } =
    useTasks();
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function handleAddTask() {
    addTask(newTask);
    setNewTask("");
  }

  const activeTasks = tasks.filter(
    (task) => !task.completed && !task.important,
  );

  return (
    <>
      <div
        className="flex items-center justify-center grid-cols-2 
                  w-full h-15 border-b border- shadow-md rounded-md"
      >
        <input
          type="text"
          placeholder="Add new tasks..."
          required
          value={newTask}
          onChange={handleInputChange}
          className=" w-full p-2 rounded-md border border-[#1B3C53]
                     focus:outline-none focus:ring-2 focus:ring-[#456882]"
        />
        <button
          onClick={handleAddTask}
          className="flex justify-center items-center border 
                  border-[#1B3C53] bg-[#E3E3E3] w-20 h-10 rounded-md cursor-pointer"
        >
          <IoMdAdd className="text-2xl text-[#1B3C53]" />
        </button>
      </div>
      {activeTasks.length === 0 ? (
        <p className="text-[#456882]">No active tasks yet.</p>
      ) : (
        <ol className="space-y-3">
          {activeTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-3 p-4 mt-5 bg-[#E3E3E3]
                         border-2 border-[#456882] rounded-md 
                         text-xl font-bold text-[#1B3C53]"
            >
              <input
                type="checkbox"
                name="checkBox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
              />
              <span className="flex-1 text-left">{task.text}</span>
              {new Date(task.createdAt).toLocaleDateString()}

              <button
                onClick={() => deleteTask(task.id)}
                className="px-3 py-2 text-lg font-bold rounded-md text-[#E3E3E3]
                           bg-[#C3110C] hover:bg-[#FF6500] transition-colors"
              >
                <MdDeleteForever className="text-2xl" />
              </button>
              <div
                className="px-3 py-2 text-lg rounded-md text-[#E3E3E3] 
                           bg-[#456882] hover:bg-[#234C6A] transition-colors"
              >
                {task.completed ? "✅Complete" : "⏳In Progress"}
              </div>
              <button
                onClick={() => markImportant(task.id)}
                className="px-3 py-2 text-lg rounded-md text-[#E3E3E3]
                           bg-[#456882] hover:bg-[#234C6A] transition-colors"
              >
                {task.important ? (
                  "⭐Important"
                ) : (
                  <FaStar className="text-2xl" />
                )}
              </button>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default MyTasks;
