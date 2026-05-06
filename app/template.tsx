"use client"
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideHeaderFooter = ["/login", "/register"].includes(pathname)
    
    return (
        <div className="fade-in">
            {!hideHeaderFooter && <Header />}
                {children}
            {!hideHeaderFooter && <Footer />}
        </div>
    );
}