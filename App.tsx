import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import Lenis from 'lenis';

// Components
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Policy from './pages/Policy';
import Sauna from './pages/Sauna';

// Scroll handling component
const ScrollHandler = ({ lenis, setLoading }: { lenis: Lenis | null, setLoading: (l: boolean) => void }) => {
  const { pathname } = useLocation();
  const { lang } = useParams();
  const prevLang = useRef(lang);

  useEffect(() => {
    // Determine if only the language changed (e.g. /lv -> /en)
    const isLangChange = prevLang.current && lang && prevLang.current !== lang;
    prevLang.current = lang;

    if (lenis) {
      if (isLangChange) {
        // Smooth scroll to top, pause briefly, then trigger language loading animation
        lenis.scrollTo(0, { immediate: true });
        setLoading(true); // Bring loader back
      } else {
        // Immediate reset for nested page navigation without lang change
        lenis.scrollTo(0, { immediate: true });
      }
    } else {
      // Fallback for no Lenis
      window.scrollTo({ top: 0, behavior: 'auto' });
      if (isLangChange) setLoading(true);
    }
  }, [pathname, lang, lenis, setLoading]);

  return null;
};

const AppContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Theme state initialization
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
      };

      const cookieTheme = getCookie('theme') as 'light' | 'dark' | undefined;
      if (cookieTheme) return cookieTheme;

      const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const lenisRef = useRef<Lenis | null>(null);

  const location = useLocation();

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    try {
      localStorage.setItem('theme', theme);
      // Set cookie for 1 year
      document.cookie = `theme=${theme};path=/;max-age=31536000;SameSite=Lax`;
    } catch (e) { }
  }, [theme, location.pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      syncTouch: false,
      touchMultiplier: 1.0,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      if (isMenuOpen || loading) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isMenuOpen, loading]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <ScrollHandler lenis={lenisRef.current} setLoading={setLoading} />

      <div className="min-h-screen flex flex-col relative bg-cream dark:bg-cream-dark transition-colors duration-500">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <Routes>
          <Route path="/" element={<Navigate to="/lv" replace />} />
          <Route path="/:lang" element={<Home isPreloading={loading} />} />
          <Route path="/:lang/sauna" element={<Sauna />} />
          <Route path="/:lang/gallery" element={<Gallery />} />
          <Route path="/:lang/policy" element={<Policy />} />
        </Routes>

        <Footer theme={theme} toggleTheme={toggleTheme} />
        <BackToTop />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;