import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { CognisenseCloud } from './pages/CognisenseCloud';
import { Capabilities } from './pages/Capabilities';
import { OpenSource } from './pages/OpenSource';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';
import { LegalDisclaimer } from './pages/LegalDisclaimer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { SecurityNotice } from './pages/SecurityNotice';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cognisense" element={<CognisenseCloud />} />
      <Route path="/products" element={<Products />} />
      <Route path="/capabilities" element={<Capabilities />} />
      <Route path="/open-source" element={<OpenSource />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/security-notice" element={<SecurityNotice />} />

      {/* Legacy Redirects */}
      <Route path="/work/*" element={<Navigate to="/products" replace />} />
      <Route path="/solutions" element={<Navigate to="/capabilities" replace />} />
      <Route path="/about" element={<Navigate to="/company" replace />} />
      <Route path="/services" element={<Navigate to="/capabilities" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
