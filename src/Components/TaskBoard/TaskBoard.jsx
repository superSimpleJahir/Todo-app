import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskLists from "./TaskLists";
import AddTaskModal from "./AddTaskModal";
const defaultTask = {
  id: crypto.randomUUID(),
  title: "Learn React",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos architecto eveniet praesentium nulla dolorem!",
  tags: ["web", "react", "js"],
  priority: "High",
  isFavorite: true,
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowAddModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  const handleDeletetask = (id) => {
    const removeValue = tasks.filter((del) => del.id !== id);
    setTasks(removeValue);
  };
  const handleAllDelete = () => {
    setTasks([]);
  };

  const handleOnClose = () => {
    setTaskToUpdate(null);
    setShowAddModal(false);
  };

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal
            onSave={handleAddEditTask}
            taskToUpdate={taskToUpdate}
            handleOnClose={handleOnClose}
          />
        )}
        <div className="container mx-auto">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddClick={() => setShowAddModal(true)} allDelete={handleAllDelete} />

            <div className="overflow-auto">
              <TaskLists tasks={tasks} onEdit={handleEditTask} onDelete={handleDeletetask} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
