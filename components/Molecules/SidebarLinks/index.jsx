import Link from "next/link";
import { useRouter } from "next/router";
import Iconx from "../../Atoms/Icons/iconx";

const SidebarRoutes = [
  {
    title: "Dashboard",
    icon: "DesktopComputerIcon",
    route: "/",
  },
  {
    title: "Item Management",
    icon: "UserAddIcon",
    route: "/admin/itemmanagement",
  },
  {
    title: "Category Management",

    icon: "ArchiveIcon",
    route: "/admin/categorymanagement",
  },
];

const SidebarLinks = () => {
  const router = useRouter();

  return (
    <>
      {SidebarRoutes.map((sidebarRoute, i) => (
        <div
          className={` py-2 group relative ${
            router.pathname === `${sidebarRoute.route}` && " bg-slate-50"
          } `}
          key={i}>
          <Link href={sidebarRoute.route}>
            <a
              className={`block text-slate-600 hover:text-yellow-500 truncate transition duration-150 ${
                router.pathname === `${sidebarRoute.route}` &&
                " text-yellow-500"
              }`}>
              <div className="flex items-center justify-center">
                <Iconx
                  icon={sidebarRoute.icon}
                  className={`w-7 h-7 shrink-0`}
                />
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SidebarLinks;
