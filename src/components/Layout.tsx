import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import heroImage from "@/assets/hero-ayurveda.jpg";

const pageTitles: Record<string, string> = {
  "/": "Welcome to Vaidyam Hospital & HealthCare",
  "/about": "About Us",
  "/services": "Our Services",
  "/consultation": "Book Consultation",
  "/blog": "Blog",
  "/contact": "Contact",
};

const Layout = () => {
  const location = useLocation();
  const bannerTitle = pageTitles[location.pathname] ?? "Ayurveda Wellness";
  const showBanner = location.pathname !== "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {showBanner && (
        <header className="relative h-[320px] md:h-[420px] overflow-hidden">
          <img
            src={heroImage}
            alt={`${bannerTitle} banner`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="container relative z-10 mx-auto flex h-full items-center px-4">
            <div className="text-white shadow-black/60">
              {/* <p className="text-sm uppercase tracking-[0.3em] text-white/90">
                Ancient Ayurveda, modern care
              </p> */}
              <h1 className="mt-3 text-3xl md:text-4xl font-heading font-bold">
                {bannerTitle}
              </h1>
            </div>
          </div>
        </header>
      )}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
