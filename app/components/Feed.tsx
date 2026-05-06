import PostCard from "./PostCard";

export default function Feed() {
  return (
    <div className="flex flex-col gap-4">
      
      {/* Create Post */}
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <textarea
          placeholder="What's happening?"
          className="w-full border rounded-lg p-3 text-sm focus:outline-none"
        />
        <div className="flex justify-end mt-2">
          <button className="px-4 py-1 bg-blue-600 text-white rounded-md text-sm">
            Post
          </button>
        </div>
      </div>

      {/* Posts */}
      <PostCard />
      <PostCard />
      <PostCard />

    </div>
  );
}