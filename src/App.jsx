import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import MarketplacePage from './pages/MarketplacePage'
import ArtisanProfilePage from './pages/ArtisanProfilePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ResourcesPage from './pages/ResourcesPage'
import CommunityPage from './pages/CommunityPage'
import ContactPage from './pages/ContactPage'
import AdminDashboard from './pages/admin/Dashboard'
import LoginPage from './pages/auth/LoginPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/artisan/:id" element={<ArtisanProfilePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App