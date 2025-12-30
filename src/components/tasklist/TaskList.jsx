import React from "react";

const TaskList = () => {
  const tasks = [1, 2, 3, 4, 5];

  const colors = [
    {
      card: "bg-blue-400",
      badge: "bg-blue-600",
    },
    {
      card: "bg-green-400",
      badge: "bg-green-600",
    },
    {
      card: "bg-yellow-400",
      badge: "bg-yellow-600",
    },
    {
      card: "bg-purple-400",
      badge: "bg-purple-600",
    },
    {
      card: "bg-pink-400",
      badge: "bg-pink-600",
    },
  ];

  return (
    <div
      className="
        flex gap-6 mt-6 pb-4
        overflow-x-auto scroll-smooth
      "
    >
      {tasks.map((item, index) => {
        const color = colors[index % colors.length];

        return (
          <div
            key={item}
            className={`
              shrink-0 w-[380px] p-6
              ${color.card}
              rounded-2xl
            `}
          >
            <div className="flex justify-between items-center">
              <h3
                className={`
                  ${color.badge}
                  text-sm px-4 py-1.5
                  rounded-full text-white
                `}
              >
                Category
              </h3>
              <h4 className="text-sm font-medium text-black/80">
                Date
              </h4>
            </div>

            <h2 className="mt-6 text-3xl font-semibold text-black">
              Title
            </h2>

            <p className="text-base mt-3 text-black/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquam, doloremque provident vitae quia magnam porro.
            </p>

            <div className="flex justify-between mt-8">
              <button className="bg-green-600 hover:bg-green-700 transition rounded-lg font-medium py-2 px-4 text-sm text-white">
                Mark as Completed
              </button>
              <button className="bg-red-600 hover:bg-red-700 transition rounded-lg font-medium py-2 px-4 text-sm text-white">
                Mark as Failed
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
