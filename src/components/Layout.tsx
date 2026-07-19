import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import defaultHeroImage from "@/assets/hero-ayurveda.jpg";
import aboutBanner from "@/assets/pagebanners/About Banner.png";
import servicesBanner from "@/assets/pagebanners/Services Banner.png";
import consultationBanner from "@/assets/pagebanners/Book Consultation Banner.png";
import blogBanner from "@/assets/pagebanners/Blog Banner.png";
import contactBanner from "@/assets/pagebanners/Contact Banner.png";

const pageTitles: Record<string, string> = {
  "/": "Welcome to Vaidyam Hospital & HealthCare",
  "/about": "About Us",
  "/services": "Our Services",
  "/consultation": "Book Consultation",
  "/blog": "Blog",
  "/contact": "Contact",
};

const pageBanners: Record<string, string> = {
  "/about": aboutBanner,
  "/services": servicesBanner,
  "/consultation": consultationBanner,
  "/blog": blogBanner,
  "/contact": contactBanner,
};

const mobileBannerModules = import.meta.glob("../assets/pagebanners/* Mobile.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const mobileBannerByName = Object.fromEntries(
  Object.entries(mobileBannerModules).map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "";
    const key = fileName.replace(" Mobile.png", "");
    return [key, src];
  })
) as Record<string, string>;

const routeBannerNames: Record<string, string> = {
  "/about": "About Banner",
  "/services": "Services Banner",
  "/consultation": "Book Consultation Banner",
  "/blog": "Blog Banner",
  "/contact": "Contact Banner",
};

const Layout = () => {
  const location = useLocation();
  const bannerTitle = pageTitles[location.pathname] ?? "Ayurveda Wellness";
  const heroImage = pageBanners[location.pathname] ?? defaultHeroImage;
  const mobileBanner = routeBannerNames[location.pathname]
    ? mobileBannerByName[routeBannerNames[location.pathname]]
    : "";
  const showBanner = location.pathname !== "/";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {showBanner && (
        <header className="relative h-[320px] md:h-[420px] overflow-hidden">
          <picture>
            <source
              media="(max-width: 640px)"
              srcSet={mobileBanner || heroImage}
            />
            <img
              src={heroImage}
              alt={`${bannerTitle} banner`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>
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
