import { useState } from "react";
import Iconx from "../../Atoms/Icons/iconx";
import Sidebar from "../../Organisms/Sidebar";
const AdminLayout = ({ children }) => {
  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
  return (
    <div className="flex flex-row h-screen overflow-hidden ">
      <Sidebar
        isSubSidebarOpen={isSubSidebarOpen}
        setIsSubSidebarOpen={setIsSubSidebarOpen}
      />
      <div className="relative z-10 flex-auto border shadow-lg bg-slate-50 rounded-xl">
        <button
          onClick={() => setIsSubSidebarOpen(!isSubSidebarOpen)}
          className="absolute p-2 bg-yellow-500 rounded-full shadow-xl top-5 -left-4">
          {isSubSidebarOpen ? (
            <Iconx
              icon="ChevronDoubleRightIcon"
              className={` w-3 h-3 text-slate-50`}
            />
          ) : (
            <Iconx
              icon="ChevronDoubleLeftIcon"
              className={` w-3 h-3 text-slate-50`}
            />
          )}
        </button>
        <div className="p-10 ">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
