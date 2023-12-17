import Image from "next/image";
import Sidebar from "@/components/Sidebar.js";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";
async function getData() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
  );
  return newsResults.json();
}
export default async function Home() {
  const newsResults = await getData();
  return (
    <main className="flex min-h-screen max-w-full mx-auto">
      <Sidebar />
      <Feed />
      <Widgets newsResults={newsResults.articles} />
    </main>
  );
}
