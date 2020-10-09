import React from 'react';
import Topbar from './view/topbar/Topbar';
import SlideCarousel from './view/slideCarousel/SlideCarousel';
import SlideViewport from './view/slideViewport/SlideViewport';
import Instruments from './view/instruments/Instruments';

function App() {
  return (
    <div id="app">
      <Topbar />
      <Instruments />
      <div className="working-area">
        <SlideCarousel />
        <SlideViewport />
      </div>
    </div>
  );
}

export default App;
