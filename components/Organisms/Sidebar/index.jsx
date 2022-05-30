import Image from "next/image";
import YoonHanTharLogoOnly from "../../../public/assets/images/logo/YoonHanTharLogoOnly.png";
import Iconx from "../../Atoms/Icons/iconx";
import SidebarLinks from "../../Molecules/SidebarLinks";
import SubSidebar from "../SubSidebar";

const Sidebar = ({ isSubSidebarOpen, setIsSubSidebarOpen }) => {
  return (
    <>
      <div className="flex flex-col justify-between bg-slate-200">
        <div className="flex flex-col w-20">
          <div className="w-full ">
            <Image src={YoonHanTharLogoOnly} alt="YoonHanThar" />
          </div>
          <div className="">
            <SidebarLinks />
          </div>
        </div>
        <div className="flex flex-col items-center py-5">
          <Iconx icon="UserCircleIcon" className={` w-8 h-8 text-slate-600`} />
        </div>
      </div>

      <SubSidebar
        isSubSidebarOpen={isSubSidebarOpen}
        setIsSubSidebarOpen={setIsSubSidebarOpen}
      />
    </>
  );
};

export default Sidebar;
