import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import SafetyPage from "./pages/SafetyPage";
import RefundsPage from "./pages/RefundsPage";

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <NavLink to="/" className="brand">
            CuddleBuddy
          </NavLink>

          <nav className="nav">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/privacy" className="nav-link">
              Privacy
            </NavLink>
            <NavLink to="/terms" className="nav-link">
              Terms
            </NavLink>
            <NavLink to="/safety" className="nav-link">
              Safety
            </NavLink>
            <NavLink to="/refunds" className="nav-link">
              Refunds
            </NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/refunds" element={<RefundsPage />} />
      </Routes>
    </div>
  );
}

export default App;