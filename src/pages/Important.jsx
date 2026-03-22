import { useTasks } from "../components/TaskContext";
import { MdDeleteForever } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const Important = () => {
  const { tasks, deleteTask, toggleCompletion, markImportant } = useTasks();

  const importantTasks = tasks.filter(
    (task) => task.important && !task.completed,
  );

  return (
    <div>
      <p className="mb-4 text-[#1B3C53]">List of Important Task.</p>

      {importantTasks.length === 0 ? (
        <p className="text-[#456882]">No important tasks yet</p>
      ) : (
        <ol className="space-y-3">
          {importantTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-3 p-4 mt-5 bg-[#E3E3E3]
                         border-2 border-[#456882] rounded-md 
                         text-xl font-bold text-[#1B3C53]"
            >
              <input
                type="checkbox"
                name="checkbox"
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
    </div>
  );
};

export default Important;
