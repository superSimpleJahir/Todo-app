import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskLists from "./TaskLists";

const TaskBoard = () => {
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
              <TaskLists />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
