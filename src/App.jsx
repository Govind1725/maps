import { lazy, Suspense, useEffect, useRef } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import HomePage from "./pages/HomePage";
import { getRouteKey, routeMeta } from "./data/siteData";
import { useReveal } from "./hooks/useReveal";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ClientsPage = lazy(() => import("./pages/ClientsPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const CertificatePage = lazy(() => import("./pages/CertificatePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function LegacyRedirect({ to }) {
  const location = useLocation();
  return <Navigate to={`${to}${location.hash}`} replace />;
}

function RoutedContent() {
  const location = useLocation();
  useReveal(location.key);
  return (
    <Routes location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/certificate" element={<CertificatePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/index.html" element={<LegacyRedirect to="/" />} />
      <Route path="/about.html" element={<LegacyRedirect to="/about" />} />
      <Route path="/clients.html" element={<LegacyRedirect to="/clients" />} />
      <Route path="/portfolio.html" element={<LegacyRedirect to="/portfolio" />} />
      <Route path="/services.html" element={<LegacyRedirect to="/services" />} />
      <Route path="/certificate.html" element={<LegacyRedirect to="/certificate" />} />
      <Route path="/contact.html" element={<LegacyRedirect to="/contact" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  const location = useLocation();
  const mainRef = useRef(null);
  const previousPath = useRef(null);
  const routeKey = getRouteKey(location.pathname);
  const meta = routeMeta[routeKey] || {
    page: "not-found",
    title: "Page Not Found – Technolabs",
    description: "The requested Technolabs page could not be found."
  };

  useEffect(() => {
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.body.dataset.page = meta.page;
    document.body.classList.toggle("services-page", routeKey === "services");
    return () => {
      delete document.body.dataset.page;
    };
  }, [meta.description, meta.page, meta.title, routeKey]);

  useEffect(() => {
    const pathChanged = previousPath.current !== location.pathname;
    previousPath.current = location.pathname;
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      let attempts = 0;
      const scrollToHash = window.setInterval(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView();
          window.clearInterval(scrollToHash);
        } else if (attempts >= 20) {
          window.clearInterval(scrollToHash);
        }
        attempts += 1;
      }, 25);
      return () => window.clearInterval(scrollToHash);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (pathChanged) requestAnimationFrame(() => mainRef.current?.focus({ preventScroll: true }));
    return undefined;
  }, [location.hash, location.pathname]);

  return (
    <>
      <SiteHeader key={location.pathname} />
      <main id="content" ref={mainRef} tabIndex={-1}>
        <div className="route-view" key={location.pathname}>
          <Suspense fallback={<div className="route-loading" role="status">Loading…</div>}>
            <RoutedContent />
          </Suspense>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
