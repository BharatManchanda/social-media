import PostCard from "./PostCard";
import CreatePost from "./CreatePost";

export default function Feed() {
  return (
    <div className="flex flex-col gap-5">
      
      {/* Create Post */}
      <CreatePost />

      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}