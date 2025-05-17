// App.jsx
import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import ScrollToTop from "@/custom/ScrollToTop";
import AchievementPopup from "@/components/AchievementPopup";
import { useContextFile } from "@/context/contextFile";

// ROUTES
import { getPrivateRoutes } from "@/routes/getPrivateRoutes";
import { getPublicRoutes } from "@/routes/getPublicRoutes";

export default function App() {
  const { loggedIn, setLoggedIn } = useContextFile();
  const [loading, setLoading] = useState(true);
  const [showAchievement, setShowAchievement] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", "#27548A");
    document.documentElement.style.setProperty("--accent", "#C95792");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
      sessionStorage.setItem("app_loaded_once", "true");
    }, sessionStorage.getItem("app_loaded_once") ? 0 : 500);

    return () => clearTimeout(timer);
  }, [setLoggedIn]);

  useEffect(() => {
    const closed = localStorage.getItem("achievement_popup_closed");
    if (!closed) {
      setShowAchievement(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showAchievement ? "hidden" : "auto";
  }, [showAchievement]);

  return (
    <>
      <ScrollToTop />
      {showAchievement && (
        <AchievementPopup
          onClose={() => {
            setShowAchievement(false);
            localStorage.setItem("achievement_popup_closed", "true");
          }}
        />
      )}
      <Routes>{loggedIn ? getPrivateRoutes() : getPublicRoutes()}</Routes>
    </>
  );
}
