import {
    Heart,
    MessageCircle,
    Repeat2,
    Share,
    MoreHorizontal,
} from "lucide-react";

export default function PostCard() {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-lg transition hover:bg-white/10 text-white">

            {/* Header */}
            <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />

                    <div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-white">John Doe</p>
                            <span className="text-xs text-slate-400">@johndoe</span>
                        </div>
                        <p className="text-xs text-slate-500">2h ago</p>
                    </div>

                </div>

                <button className="text-slate-400 hover:text-white transition">
                    <MoreHorizontal size={18} />
                </button>

            </div>

            {/* Content */}
            <p className="mt-4 text-sm text-black leading-relaxed">
                This is a sample post content for your social media app 🚀 Build something amazing and scalable!
            </p>

            {/* Actions */}
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-slate-400">

                <button className="flex items-center gap-2 hover:text-pink-400 transition">
                    <Heart size={18} />
                    <span className="text-xs">Like</span>
                </button>

                <button className="flex items-center gap-2 hover:text-blue-400 transition">
                    <MessageCircle size={18} />
                    <span className="text-xs">Comment</span>
                </button>

                <button className="flex items-center gap-2 hover:text-green-400 transition">
                    <Repeat2 size={18} />
                    <span className="text-xs">Repost</span>
                </button>

                <button className="flex items-center gap-2 hover:text-yellow-400 transition">
                    <Share size={18} />
                    <span className="text-xs">Share</span>
                </button>

            </div>
        </div>
    );
}