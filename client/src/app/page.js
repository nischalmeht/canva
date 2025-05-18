import Image from "next/image";
import Header from "@/components/home/header";
import SideBar from "@/components/home/sidebar";
import Banner from "@/components/home/banner";
import AiFeatures from "@/components/home/ai-features";
export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      <SideBar/>
      <div className="flex-1 flex flex-col ml-[72px]">
        <Header/>
        <main className="flex-1 p-6 overflow-y-auto pt-20">
          <Banner/>
          <AiFeatures/>
        </main>
      </div>
    </div>
  );
}
