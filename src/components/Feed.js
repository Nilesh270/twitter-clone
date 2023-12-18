import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";
const Feed = () => {
  const posts = [
    {
      id: 1,
      name: "Mark Zuck",
      username: "codewithzuck",
      userImg:
        "http://localhost:3000/_next/image?url=https%3A%2F%2Fpngimg.com%2Fd%2Fmark_zuckerberg_PNG35.png&w=64&q=75",
      img: "https://images.unsplash.com/photo-1682695794816-7b9da18ed470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "What a view!",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      name: "Mark Zuck",
      username: "codewithzuck",
      userImg:
        "http://localhost:3000/_next/image?url=https%3A%2F%2Fpngimg.com%2Fd%2Fmark_zuckerberg_PNG35.png&w=64&q=75",
      img: "https://images.unsplash.com/photo-1683009427513-28e163402d16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Scenic",
      timestamp: "2 days ago",
    },
  ];
  return (
    <div className="xl:ml-[360px] border-l border-gray-200 border-r xl:min-w-[676px] sm:ml-[70px] flex-grow max-w-[676px] ">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="xl:text-lg sm:text-xl font-bold cursor-pointer ">
          Home
        </h2>

        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
