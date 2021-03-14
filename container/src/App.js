import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <div>Hi there!</div>
          <hr />
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
