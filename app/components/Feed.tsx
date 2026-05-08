import PostCard from "./PostCard";
import { Image, Smile, Send } from "lucide-react";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";

export default function Feed() {
  return (
    <div className="flex flex-col gap-5">
      
      {/* Create Post */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-lg">
        
        <Textarea
          placeholder="What's happening?"
          className="h-24"
        />

        <div className="mt-4 flex items-center justify-between">
          
          {/* Actions */}
          <div className="flex items-center gap-3 text-slate-400">
            <Button variant="ghost" size="icon" className="hover:text-blue-400">
              <Image size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-yellow-400">
              <Smile size={18} />
            </Button>
          </div>

          {/* Post Button */}
          <Button size="sm">
            <Send size={16} />
            Post
          </Button>
        </div>
      </div>

      {/* Posts */}
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}