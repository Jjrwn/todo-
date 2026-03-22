import { createContext, useState, useEffect, useContext } from "react";

const TaskContext = createContext();

const STORAGE_KEY = "tasks";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    if (!taskText.trim()) return;

    const task = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
      important: false,
      createdAt: Date.now(),
    };

    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              important: !task.completed ? false : task.important,
            }
          : task,
      ),
    );
  };

  const markImportant = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task,
      ),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleCompletion,
        markImportant,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within TaskProvider");
  }
  return context;
};
