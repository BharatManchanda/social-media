import Image from "next/image";
import Link from "next/link";
import LeftSidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-12 gap-6">
        
        {/* Left Sidebar */}
        <div className="hidden md:block col-span-3">
          <LeftSidebar />
        </div>

        {/* Feed */}
        <div className="col-span-12 md:col-span-6">
          <Feed />
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block col-span-3">
          <RightSidebar />
        </div>

      </div>
    </>
  );
}
