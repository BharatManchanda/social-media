import Link from "next/link";

export default function LeftSidebar() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border">
      <nav className="flex flex-col gap-4 text-sm">
        <Link href="/" className="font-medium hover:text-blue-600">🏠 Home</Link>
        <Link href="/profile" className="hover:text-blue-600">👤 Profile</Link>
        <Link href="/explore" className="hover:text-blue-600">🔍 Explore</Link>
        <Link href="/messages" className="hover:text-blue-600">💬 Messages</Link>
        <Link href="/notifications" className="hover:text-blue-600">🔔 Notifications</Link>
      </nav>
    </div>
  );
}