import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <div>Hi there!</div>
        <hr />
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
