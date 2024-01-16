import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskLists from "./TaskLists";
const defaultTask = {
  id: crypto.randomUUID(),
  title: "Learn React",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos architecto eveniet praesentium nulla dolorem!",
  tags: ["web", "react", "js"],
  Priority: "High",
  isFavorite: true,
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState([defaultTask]);

  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container mx-auto">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction />

            <div className="overflow-auto">
              <TaskLists tasks={tasks} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
