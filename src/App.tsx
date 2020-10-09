import React from 'react';
import Topbar from './view/topbar/Topbar';
import SlideCarousel from './view/slideCarousel/SlideCarousel';
import SlideViewport from './view/slideViewport/SlideViewport';

function App() {
  return (
    <div id="app">
      <Topbar />
      <div className="working-area">
        <SlideCarousel />
        <SlideViewport />
      </div>
    </div>
  );
}

export default App;
