import Hero from './components/Hero';
import MissionOverview from './components/MissionOverview';
import WhatIsShaktiSat from './components/WhatIsShaktiSat';
import MissionToWhyTransition from './components/MissionToWhyTransition';
import Why108 from './components/Why108';
import FoundationAbout from './components/FoundationAbout';
import ProgramHighlights from './components/ProgramHighlights';
import Impact from './components/Impact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#07070F] overflow-x-hidden">
      <Hero />
      <MissionOverview />
      <WhatIsShaktiSat />
      <MissionToWhyTransition />
      <Why108 />
      <FoundationAbout />
      <ProgramHighlights />
      <Impact />
      <Footer />
    </div>
  );
}

export default App;
