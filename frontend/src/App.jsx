import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages principales
import HomePage from "./pages/HomePage";
import ArtisansPage from "./pages/ArtisansPage";
import ArtisanPage from "./pages/ArtisanPage";
import CategoriePage from "./pages/CategoriePage";
import ContactPage from "./pages/ContactPage";

// Admin
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminMessagesPage from "./pages/AdminMessagesPage";
import AdminArtisansPage from "./pages/AdminArtisansPage";
import AdminCategoriesPage from "./pages/AdminCategoriesPage";
import AdminSpecialitesPage from "./pages/AdminSpecialitesPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

// Légales
import LegalMentions from "./pages/LegalMentions";
import LegalData from "./pages/LegalData";
import LegalAccessibility from "./pages/LegalAccessibility";
import LegalCookies from "./pages/LegalCookies";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// 404
import NotFound from "./pages/NotFound";

// Protection admin
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Pages principales */}
        <Route path="/" element={<HomePage />} />
        <Route path="/artisans" element={<ArtisansPage />} />
        <Route path="/artisan/:id" element={<ArtisanPage />} />
        <Route path="/categorie/:id" element={<CategoriePage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Admin - Login accessible sans token */}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Admin - Routes protégées */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/messages"
          element={
            <ProtectedRoute>
              <AdminMessagesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/artisans"
          element={
            <ProtectedRoute>
              <AdminArtisansPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/categories"
          element={
            <ProtectedRoute>
              <AdminCategoriesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/specialites"
          element={
            <ProtectedRoute>
              <AdminSpecialitesPage />
            </ProtectedRoute>
          }
        />

        {/* Pages légales */}
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route path="/donnees-personnelles" element={<LegalData />} />
        <Route path="/accessibilite" element={<LegalAccessibility />} />
        <Route path="/cookies" element={<LegalCookies />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
