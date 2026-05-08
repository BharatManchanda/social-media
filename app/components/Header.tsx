"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  Home,
  Compass,
  MessageCircle,
  Bell,
  Menu,
} from "lucide-react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Explore",
    href: "/explore",
    icon: Compass,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageCircle,
  },
];

export default function Header() {
  const [search, setSearch] = useState<string>("");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 lg:px-6">
        
        {/* Left */}
        <div className="flex items-center gap-10">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight text-white">
                Loopin
              </h1>

              <p className="text-xs text-slate-400">
                Connect with the world
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className="group relative flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/5 hover:text-white"
                >
                  <Icon
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                  {item.name}

                  <span className="absolute bottom-1 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-8"></span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Center Search */}
        <div className="mx-8 hidden flex-1 md:flex max-w-xl">
          <Input
            type="text"
            placeholder="Search posts, people, trends..."
            value={search}
            icon={<Search size={18} />}
            onChange={(e) => setSearch(e.target.value)}
            className="h-12 focus:bg-white/10"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          
          {/* Notification */}
          <Button variant="outline" size="icon" className="relative hidden md:flex">
            <Bell size={19} />
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>

          {/* Login */}
          <Link
            href="/login"
            className="hidden rounded-2xl px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/5 hover:text-white md:block"
          >
            Login
          </Link>

          {/* Sign Up */}
          <Link
            href="/register"
            className="hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 md:block"
          >
            Get Started
          </Link>

          {/* Mobile Menu */}
          <Button variant="outline" size="icon" className="flex lg:hidden">
            <Menu size={22} />
          </Button>
        </div>
      </div>
    </header>
  );
}