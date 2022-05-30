const SubSidebar = ({ isSubSidebarOpen, setIsSubSidebarOpen }) => {
  const n = 38;
  return (
    <>
      <div
        className={` flex flex-col w-48 bg-slate-50 transform transition-all duration-500 ease-in-out ${
          isSubSidebarOpen ? ` w-0 ` : ``
        }`}>
        <div className="p-5">
          <h1 className="text-lg leading-loose tracking-wide text-slate-900">
            Dashboard
          </h1>
        </div>

        <div className="flex-auto px-5 overflow-y-auto">
          <div className="space-y-4 ">
            <p>Daily</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubSidebar;
