import React from 'react';
import Topbar from './view/Topbar/Topbar';
import SlideCarousel from './view/SlideCarousel/SlideCarousel';
import SlideViewport from './view/SlideViewport/SlideViewport';
import Instruments from './view/Instruments/Instruments';
import Footer from './view/Footer/Footer';
import { AppType } from './model/model';

interface AppProps {
  app: AppType;
}

export default function App(props: AppProps) {
  return (
    <div id="app">
      <Topbar presentationName={ props.app.name } />
      <Instruments />
      <div className='working-area'>
        <SlideCarousel currSlideId={props.app.currSlideId} slides={ props.app.slides } />
        <SlideViewport slide={ props.app.slides.find(slide => slide.id === props.app.currSlideId)} slideWidth={props.app.settings.slideWidth} slideHeight={props.app.settings.slideHeight} />
      </div>
      <Footer />
    </div>
  );
}