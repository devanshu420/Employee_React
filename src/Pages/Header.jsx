const Header = ({ username = "Devanshu" }) => {
  return (
    <header className="bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800 px-6 py-4 mb-6">

      <div className="flex items-center justify-between">

        {/* Left: Username */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-r from-indigo-700 to-purple-700 text-white font-bold">
            {username.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="text-sm text-gray-400">Welcome</p>
            <h2 className="text-lg font-semibold text-gray-100">
              {username}👋
            </h2>
          </div>
        </div>

        {/* Right: Logout Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer active:scale-95 bg-linear-to-r bg-red-600 text-white cufont-medium hover:opacity-90 transition shadow-lg"
        >
           Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
