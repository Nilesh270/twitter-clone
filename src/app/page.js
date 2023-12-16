import React from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "@/components/Widgets";

async function getData() {
  try {
    const newsApiResponse = await fetch(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=8c774d88e7e340e39ca3df32c97e5710"
    );

    const randomUserApiResponse = await fetch(
      "https://randomuser.me/api/?results=50"
    );

    if (
      newsApiResponse.status !== 200 ||
      randomUserApiResponse.status !== 200
    ) {
      throw new Error("Failed to fetch data");
    }
    const newsData = await newsApiResponse.json();
    const randomUserData = await randomUserApiResponse.json();

    return { newsData, randomUserData };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { newsData: null, randomUserData: null };
  }
}

export default async function page() {
  const data = await getData();
  // console.log(data.randomUserData.results);

  return (
    <div>
      <main className="flex min-h-screen mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          newsdata={data.newsData.articles}
          randomuser={data.randomUserData.results}
        />
      </main>
    </div>
  );
}