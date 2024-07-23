
import Filter from "@/Components/Filter";
import { SideBar } from "@/Components/SideBar";
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex w-full">
      <div className="flex-col h-screen mt-2 border-slate-300 border-r ">
        <SideBar />
      </div>
      {/* <div className=' lg:w-[30%]'>
        <Filter/>
      </div> */}
      {children}
    </div>
  );
}
