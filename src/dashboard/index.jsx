import React, { useState } from "react";
import AddResumeBtn from "./components/AddResumeBtn";

function Dashboard() {
  // State for sidebar toggle on small screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home"); // State to track the active navigation item

  // Function to handle sidebar toggle
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle navigation item click
  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } sm:block w-64 bg-white shadow-md flex-shrink-0 transition-transform duration-200 transform sm:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:relative fixed z-30`}
      >
        <div className="p-4 font-bold text-lg border-b border-gray-200">
          Dashboard
        </div>
        <nav className="mt-4">
          {["Home", "Profile", "Messages", "Settings"].map((item) => (
            <a
              href="#"
              key={item}
              onClick={() => handleNavClick(item)}
              className={`block py-2.5 px-4 rounded transition duration-200 ${
                activeNav === item
                  ? "bg-gray-200 text-blue-600"
                  : "hover:bg-gray-200"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        {/* Top Nav */}
        <div className="h-16 bg-white shadow-md flex items-center px-6">
          <div className="flex items-center justify-between w-full">
            {/* Sidebar toggle button for small screens */}
            <button className="sm:hidden" onClick={handleSidebarToggle}>
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <div className="text-2xl font-bold">Dashboard</div>
            <div className="flex items-center space-x-4">
              {/* Notifications dropdown */}
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-gray-200 focus:outline-none">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.5V11a5.002 5.002 0 00-4-4.9V6a2 2 0 10-4 0v.1a5.002 5.002 0 00-4 4.9v3.5c0 .464-.105.91-.293 1.295L4 17h11z"
                    />
                  </svg>
                </button>
                {/* Dropdown content */}
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden hidden">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Notification 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Notification 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Notification 3
                  </a>
                </div>
              </div>
              {/* Profile button */}
              <button className="p-2 rounded-full hover:bg-gray-200">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a9 9 0 110 18H5a9 9 0 110-18h14zm0 0V7a4 4 0 10-8 0v4h8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="flex-grow p-6">
          <div className="pb-5">
            <h2 className="text-3xl font-bold">My Resume</h2>
            <p>Start creating AI generated resume for your new job role</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

            <AddResumeBtn />
            <AddResumeBtn />
            <AddResumeBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
