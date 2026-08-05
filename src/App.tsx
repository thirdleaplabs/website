import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Capabilities } from './pages/Capabilities';
import { OpenSource } from './pages/OpenSource';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';
import { WhaleScanner } from './pages/WhaleScanner';
import { GoPaySol } from './pages/GoPaySol';
import { VisionX } from './pages/VisionX';
import { LegalDisclaimer } from './pages/LegalDisclaimer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { SecurityNotice } from './pages/SecurityNotice';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/capabilities" element={<Capabilities />} />
      <Route path="/open-source" element={<OpenSource />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work/whalescanner" element={<WhaleScanner />} />
      <Route path="/work/gopaysol" element={<GoPaySol />} />
      <Route path="/work/visionx" element={<VisionX />} />
      <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/security-notice" element={<SecurityNotice />} />

      <Route path="/solutions" element={<Navigate to="/capabilities" replace />} />
      <Route path="/products" element={<Navigate to="/work" replace />} />
      <Route path="/labs/whalescanner" element={<Navigate to="/work/whalescanner" replace />} />
      <Route path="/labs/gopaysol" element={<Navigate to="/work/gopaysol" replace />} />
      <Route path="/labs/visionx" element={<Navigate to="/work/visionx" replace />} />
      <Route path="/products/whalescanner" element={<Navigate to="/work/whalescanner" replace />} />
      <Route path="/products/gopaysol" element={<Navigate to="/work/gopaysol" replace />} />
      <Route path="/about" element={<Navigate to="/company" replace />} />
      <Route path="/services" element={<Navigate to="/capabilities" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
