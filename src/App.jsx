import React from 'react';
import Homepage from './Pages/Homepage';
import AboutUsPage from './Pages/AboutUsPage';
import Packages from './Pages/Packages';
import Footer from './components/Footer';
import SchedulePage from './Pages/SchedulePage';
import { TestProvider } from './components/Testcontext';
import MarqueeComponent from './components/MarqueeComponent';

export default function App() {
  return (
    <TestProvider>
      <MarqueeComponent />
      <Homepage />
      <SchedulePage />
      <AboutUsPage />
      <Packages />
      <Footer />
    </TestProvider>
  );
}
