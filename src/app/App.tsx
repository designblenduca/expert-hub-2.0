import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { Method } from './components/Method';
import { ModelExpert } from './components/ModelExpert';
import { HexagonPillars } from './components/HexagonPillars';
import { Testimonials } from './components/Testimonials';
import { ThreePillars } from './components/ThreePillars';
import { Team } from './components/Team';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div
      style={{ background: '#000', minHeight: '100vh', color: '#fff' }}
    >
      <Navbar />
      <Hero />
      <Comparison />
      <Method />
      <ModelExpert />
      <HexagonPillars />
      <Testimonials />
      <ThreePillars />
      <Team />
      <FinalCTA />
      <Footer />
    </div>
  );
}
