export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">

        {/* Left */}
        <p>© {new Date().getFullYear()} SocialApp. All rights reserved.</p>

        {/* Links */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/privacy" className="hover:text-blue-600">Privacy</a>
          <a href="/terms" className="hover:text-blue-600">Terms</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </div>

      </div>
    </footer>
  );
}