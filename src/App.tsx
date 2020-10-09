import React from 'react';
import Topbar from './view/topbar/Topbar';
import SlideCarousel from './view/slideCarousel/SlideCarousel';
import SlideViewport from './view/slideViewport/SlideViewport';
import Instruments from './view/instruments/Instruments';
import { createApp, createSettings } from './constructors/constructors';

const settings = createSettings('800px', '600px');
const app = createApp(settings);

export default function App() {
  return (
    <div id="app">
      <Topbar presentationName={ app.name } />
      <Instruments />
      <div className='working-area'>
        <SlideCarousel slides={ app.slides } />
        <SlideViewport slide={app.slides.find(slide => slide.id === app.currSlideId)} slideWidth={app.settings.slideWidth} slideHeight={app.settings.slideHeight} />
      </div>
    </div>
  );
}