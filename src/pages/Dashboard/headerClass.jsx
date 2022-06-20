import { NavLink } from "react-router-dom";

const HeaderClass = () => {
  return (
    <div className="flex justify-center space-x-4">
      <NavLink
        to="/dashboard/class"
        className={({ isActive }) =>
          isActive
            ? "rounded-full text-center w-40 bg-transparent text-[#415A80] border-solid border-2 border-[#415A80]"
            : ""
        }
      >
        All
      </NavLink>
      <NavLink
        to="/dashboard/student"
        className={({ isActive }) =>
          isActive
            ? "rounded-full text-center w-40  bg-transparent text-[#415A80] border-solid border-2 border-[#415A80]"
            : ""
        }
      >
        Class Student
      </NavLink>
      <NavLink
        to="/dashboard/teacher"
        className={({ isActive }) =>
          isActive
            ? "rounded-full text-center w-40  bg-transparent text-[#415A80] border-solid border-2 border-[#415A80]"
            : ""
        }
      >
        Class Teacher
      </NavLink>
    </div>
  );
};

export default HeaderClass;
