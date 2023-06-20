import Dashboard from "@/components/dashboard/Dashboard";
import Header from "@/components/header/Header";
import Loading from "@/components/loading/Loading";
import SideBar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="h-screen w-screen flex bg-lightBg dark:bg-darkBg">
      <Loading />
      <SideBar />
      <main className="flex flex-grow flex-col h-full">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}
