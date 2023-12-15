import Image from "next/image";
import Sidebar from "@/components/Sidebar.js";
export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[90rem] mx-auto">
      <div>
        <Sidebar />
      </div>
    </main>
  );
}
