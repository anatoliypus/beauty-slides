import React from 'react';
import Topbar from './view/Topbar/Topbar';
import SlideCarousel from './view/SlideCarousel/SlideCarousel';
import SlideViewport from './view/SlideViewport/SlideViewport';
import Instruments from './view/Instruments/Instruments';
import Footer from './view/Footer/Footer';
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
      <Footer />
    </div>
  );
}