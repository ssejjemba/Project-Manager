import SideBar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      <SideBar />
      <main className="flex flex-grow flex-col h-full">
        <header>Header</header>
        <div>Content</div>
      </main>
    </div>
  );
}
