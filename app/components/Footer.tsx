export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-slate-900">
            Social<span className="text-blue-500">Hub</span>
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Connect, share and grow together
          </p>

          <p className="mt-3 text-xs text-slate-500">
            © {new Date().getFullYear()} SocialHub. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm">

          <a
            href="/about"
            className="text-slate-500 transition hover:text-slate-900"
          >
            About
          </a>

          <a
            href="/privacy"
            className="text-slate-500 transition hover:text-slate-900"
          >
            Privacy
          </a>

          <a
            href="/terms"
            className="text-slate-500 transition hover:text-slate-900"
          >
            Terms
          </a>

          <a
            href="/contact"
            className="text-slate-500 transition hover:text-slate-900"
          >
            Contact
          </a>
        </div>

        {/* Right / CTA */}
        <div className="flex flex-col items-center gap-2 md:items-end">
          <p className="text-xs text-slate-500">
            Built with for creators
          </p>

          <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:scale-105">
            Join Community
          </button>
        </div>

      </div>
    </footer>
  );
}