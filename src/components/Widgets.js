"use client";
import { SearchIcon } from "@heroicons/react/outline";
import News from "./News";
import { useState } from "react";
//https://saurav.tech/NewsAPI/top-headlines/category/bussiness/in.json
const Widgets = ({ newsResults }) => {
  const [articleNumber, setArticleNumber] = useState(3);
  return (
    <div className="xl:w-full hidden lg:inline ml-12 xl:ml-20 xl:pl-2 space-y-5">
      <div className="w-[100%] xl:w-[80%] sticky top-0 bg-white py-1.5 z-50 ">
        <div className="flex items-center p-3 rounded-full relative">
          <SearchIcon className="h-5 z-50 text-gray-500 " />
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter...."
          />
        </div>
      </div>
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-2xl pt-2 w-[90%] xl:w-[80%]">
        <h4 className="font-bold text-lg px-4 pt-2">{`What's Happening...`}</h4>
        <div className=" border-b-2"></div>
        {newsResults.slice(0, articleNumber).map((article) => (
          <News key={article.title} article={article} />
        ))}
        <button
          onClick={() => {
            setArticleNumber(articleNumber + 3);
          }}
          className="text-blue-600 pl-4 pb-3 hover:text-blue-400"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Widgets;
