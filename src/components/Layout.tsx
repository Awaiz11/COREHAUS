import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PromoPopup } from "./PromoPopup";

export function Layout() {
  const location = useLocation();
  const isAuth = location.pathname === "/signin";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ink text-cream">
      <div className="grain" />
      {!isAuth && <Navbar />}
      <PromoPopup />
      <main>
        <Outlet />
      </main>
      {!isAuth && <Footer />}
    </div>
  );
}
