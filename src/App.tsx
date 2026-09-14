import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import CountryDetail from './pages/CountryDetail';
import Services from './pages/Services';
import Process from './pages/Process';
import Visa from './pages/Visa';
import Contact from './pages/Contact';
import AdminLayout from './pages/admin/AdminLayout';
import Overview from './pages/admin/Overview';
import HomeAdmin from './pages/admin/HomeAdmin';
import CountriesAdmin from './pages/admin/CountriesAdmin';
import {
  ServicesAdmin,
  ProcessAdmin,
  TestimonialsAdmin,
  BranchesAdmin,
} from './pages/admin/ListEditors';
import VisaAdmin from './pages/admin/VisaAdmin';
import NavigationAdmin from './pages/admin/NavigationAdmin';
import ThemeAdmin from './pages/admin/ThemeAdmin';
import SiteAdmin from './pages/admin/SiteAdmin';
import SettingsAdmin from './pages/admin/SettingsAdmin';
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:slug" element={<CountryDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Overview />} />
        <Route path="home" element={<HomeAdmin />} />
        <Route path="countries" element={<CountriesAdmin />} />
        <Route path="services" element={<ServicesAdmin />} />
        <Route path="process" element={<ProcessAdmin />} />
        <Route path="visa" element={<VisaAdmin />} />
        <Route path="testimonials" element={<TestimonialsAdmin />} />
        <Route path="branches" element={<BranchesAdmin />} />
        <Route path="navigation" element={<NavigationAdmin />} />
        <Route path="theme" element={<ThemeAdmin />} />
        <Route path="site" element={<SiteAdmin />} />
        <Route path="settings" element={<SettingsAdmin />} />
      </Route>
    </Routes>
  );
}
