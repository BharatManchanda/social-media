export default function PostCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border">
      
      {/* User Info */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div>
          <p className="text-sm font-semibold">John Doe</p>
          <p className="text-xs text-gray-500">@johndoe • 2h</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-sm mb-3">
        This is a sample post content for your social media app 🚀
      </p>

      {/* Actions */}
      <div className="flex justify-between text-sm text-gray-500">
        <button>❤️ Like</button>
        <button>💬 Comment</button>
        <button>🔁 Share</button>
      </div>

    </div>
  );
}