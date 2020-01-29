import React from 'react';
import CulinaryDelight from './layouts/CulinaryDelight'
import DiscoverOurMenu from './layouts/DiscoverOurMenu'
import DiscoverOurStory from './layouts/DiscoverOurStory'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Hero from './layouts/Hero'
import PerfectBlend from './layouts/PerfectBlend'
import TastefulRecipes from './layouts/TastefulRecipes'

import './assets/scss/Responsive.scss'

import './App.css';

function App() {

  const info = [
    {
      firstLetter: 'D',
      subHeadline: 'iscover',
      headline: 'Our Story',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
      unde, accusamus cumque iusto vero sint, incidunt ducimus
      asperiores nostrum suscipit dolor ab obcaecati voluptas
      deleniti. Cupiditate numquam nemo possimus molestias.`,
      ctaBtn: 'About us'
    },
    {
      firstLetter: 'D',
      subHeadline: 'iscover',
      headline: 'Menu',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
      unde, accusamus cumque iusto vero sint, incidunt ducimus
      asperiores nostrum suscipit dolor ab obcaecati voluptas
      deleniti. Cupiditate numquam nemo possimus molestias.`,
      ctaBtn: 'View the full menu'
    }
  ]


  return (
    <div className="App">
      <Header />
      <Hero />
      <DiscoverOurStory />
      <TastefulRecipes />
      <DiscoverOurMenu />
      <PerfectBlend />
      <CulinaryDelight />
      <Footer />
    </div>
  );
}

export default App;
