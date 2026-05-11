"use client";
import LeftSidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
// import { useRouter } from "next/navigation";
// import { useLayoutEffect } from "react";
import { useAppSelector } from "./redux/hooks";
import withAuth from "./components/withAuth";

function Home() {
  // const router = useRouter();
  const auth = useAppSelector((state: any) => state.auth);
  
  // useLayoutEffect(() => {
  //   if (!auth.user) {
  //     router.push("/login");
  //   }
  // }, [auth, router]);

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

export default withAuth(Home);
