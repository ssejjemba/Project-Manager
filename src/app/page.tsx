import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="h-screen w-screen flex bg-lightBg dark:bg-darkBg">
      <SideBar />
      <main className="flex flex-grow flex-col h-full">
        <Header />
        <div>Content</div>
      </main>
    </div>
  );
}
