import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskLists from "./TaskLists";
import AddTaskModal from "./AddTaskModal";
import NoTasksFound from "./NoTasksFound";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
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
  const handlefavorite = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTask = [...tasks];
    newTask[taskIndex].isFavorite = !newTask[taskIndex].isFavorite;
    setTasks(newTask);
  };

  const handleOnClose = () => {
    setTaskToUpdate(null);
    setShowAddModal(false);
  };

  const handleSearch = (searchTerm) => {
    const filtredTask = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTasks([...filtredTask]);
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
            <SearchTask onSearch={handleSearch} />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddClick={() => setShowAddModal(true)} allDelete={handleAllDelete} />

            <div className="overflow-auto">
              {tasks.length > 0 ? (
                <TaskLists
                  tasks={tasks}
                  onEdit={handleEditTask}
                  onDelete={handleDeletetask}
                  onFavorite={handlefavorite}
                />
              ) : (
                <NoTasksFound />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
