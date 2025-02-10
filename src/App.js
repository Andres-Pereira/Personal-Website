import React from 'react';
//Esta importacion se hizo en una sola linea gracias al index que exporta en la carpeta container.
//Una buena practica para tener el codigo mas limpio
import { About,Footer,Header,Skills,Testimonial,Work } from './container';
import {Navbar} from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default App;