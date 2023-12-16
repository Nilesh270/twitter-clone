import Image from "next/image";
import Sidebar from "@/components/Sidebar.js";
import Feed from "@/components/Feed";
export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[90rem] mx-auto">
      <Sidebar />
      <Feed />
    </main>
  );
}
