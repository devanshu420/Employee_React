import React from "react";

const TaskListNumber = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

      <div className="rounded-xl py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-xl mt-0.5 font-medium">New Task</h3>
      </div>

      <div className="rounded-xl py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-bold">5</h2>
        <h3 className="text-xl mt-0.5 font-medium">Completed Task</h3>
      </div>

      <div className="rounded-xl py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl text-black font-bold">2</h2>
        <h3 className="text-xl mt-0.5 text-black font-medium">Accepted Task</h3>
      </div>

      <div className="rounded-xl py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-bold">3</h2>
        <h3 className="text-xl mt-0.5 font-medium">Failed Task</h3>
      </div>

    </div>
  );
};

export default TaskListNumber;
