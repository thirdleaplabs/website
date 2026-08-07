import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { EyeWitX } from './pages/EyeWitX';
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
      <Route path="/eyewitx" element={<EyeWitX />} />
      <Route path="/products" element={<Products />} />
      <Route path="/capabilities" element={<Capabilities />} />
      <Route path="/open-source" element={<OpenSource />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/security-notice" element={<SecurityNotice />} />

      {/* Legacy Redirects */}
      <Route path="/work" element={<Navigate to="/products" replace />} />

      <Route path="/cognisense" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/work/eyewitx" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/products/eyewitx" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/labs/eyewitx" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/work/cognisense" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/work/cognisense-cloud" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/work/visionx" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/work/flametrax" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/products/cognisense" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/products/cognisense-cloud" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/products/visionx" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/products/flametrax" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/labs/cognisense" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/labs/cognisense-cloud" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/labs/visionx" element={<Navigate to="/eyewitx" replace />} />
      <Route path="/labs/flametrax" element={<Navigate to="/eyewitx" replace />} />

      <Route path="/labs/whalescanner" element={<Navigate to="/products#whalescanner" replace />} />
      <Route path="/work/whalescanner" element={<Navigate to="/products#whalescanner" replace />} />
      <Route path="/products/whalescanner" element={<Navigate to="/products#whalescanner" replace />} />

      <Route path="/solutions" element={<Navigate to="/capabilities" replace />} />
      <Route path="/about" element={<Navigate to="/company" replace />} />
      <Route path="/services" element={<Navigate to="/capabilities" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
