import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [textMounted, setTextMounted] = useState(false);

  useEffect(() => {
    // Start text animation shortly after mount
    const textTimer = setTimeout(() => setTextMounted(true), 100);
    
    // Start exit animation after 2.5s
    const exitTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Remove from DOM after exit transition (1000ms)
    const unmountTimer = setTimeout(() => {
      setOverlayVisible(false);
    }, 3500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <>
      {overlayVisible && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] transition-all duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] ${
            loading ? "opacity-100" : "-translate-y-full"
          }`}
        >
          <h1
            className={`font-display text-4xl md:text-6xl uppercase tracking-[0.25em] text-cream transition-all duration-[2000ms] ease-out ${
              textMounted && loading ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            COREHAUS
          </h1>
        </div>
      )}

      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}
