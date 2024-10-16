import { Routes, Route } from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Home from './Home';
import Yellow from './Yellow';
import Green from './Green';

export default function MainSection() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/green" element={<Green />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}