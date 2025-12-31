import { useState } from "react";

const CreateTask = () => {


const submitHandler = (e) => {
    e.preventDefault()
    console.log("Create Task Form Submit");
    
}

  return (
    <div className="p-8 mt-6 rounded-2xl bg-linear-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">
        Create New Task
      </h2>

      <form 
      onSubmit={(e) => {
        submitHandler(e)
      }}
      className="flex flex-wrap justify-between gap-6">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 space-y-5">
          {/* Task Title */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-4/5 rounded-xl px-4 py-2 text-sm
                bg-gray-800 border border-gray-700 text-gray-100
                outline-none focus:ring-2 focus:ring-emerald-500
                transition-all duration-200"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Date
            </label>
            <input
              type="date"
              className="w-4/5 rounded-xl px-4 py-2 text-sm
                bg-gray-800 border border-gray-700 text-gray-100
                outline-none focus:ring-2 focus:ring-emerald-500
                transition-all duration-200"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Assign To
            </label>
            <input
              type="text"
              placeholder="Employee name"
              className="w-4/5 rounded-xl px-4 py-2 text-sm
                bg-gray-800 border border-gray-700 text-gray-100
                outline-none focus:ring-2 focus:ring-emerald-500
                transition-all duration-200"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Category
            </label>
            <input
              type="text"
              placeholder="Design, Dev, QA"
              className="w-4/5 rounded-xl px-4 py-2 text-sm
                bg-gray-800 border border-gray-700 text-gray-100
                outline-none focus:ring-2 focus:ring-emerald-500
                transition-all duration-200"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-2/5 flex flex-col">
          <label className="block text-sm text-gray-300 mb-1">
            Description
          </label>

          <textarea
            placeholder="Write task details..."
            className="h-44 rounded-xl px-4 py-3 text-sm
              bg-gray-800 border border-gray-700 text-gray-100
              outline-none focus:ring-2 focus:ring-emerald-500
              resize-none transition-all duration-200"
          ></textarea>

          <button
            type="submit"
            className="mt-4 w-full py-3 rounded-xl
              bg-emerald-600 hover:bg-emerald-700
              text-white font-semibold text-sm shadow-lg
              transition-all duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
