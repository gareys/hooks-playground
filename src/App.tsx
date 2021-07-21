import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './components/home/Home';
import { States } from './components/states/States';
import { BackLink } from './components/shared/BackLink';
import { Countries } from './components/countries/Countries';
import { TicTacToe } from './components/tictactoe/TicTacToe';
import { ColorsScene } from './components/colors/ColorsScene';
import { ThemesScene } from './components/themes/ThemesScene';
import { AdvancedThemesScene } from './components/themes/AdvancedThemesScene';
import { TickerTape } from './components/tickerTape/TickerTape';

export const App = () => {
  return (
    <AppContainer>
      <Router basename="/hooks-playground">
        <div>
          <nav>
            <Link to="/">Home</Link>
            {` | `}
            <BackLink />
          </nav>
        </div>
        <Switch>
          <Route path="/colors">
            <ColorsScene />
          </Route>
          <Route path="/countries">
            <Countries />
          </Route>
          <Route path="/states">
            <States />
          </Route>
          <Route path="/tictactoe">
            <TicTacToe />
          </Route>
          <Route path="/themes">
            <ThemesScene />
          </Route>
          <Route path="/advancedThemes">
            <AdvancedThemesScene />
          </Route>
          <Route path="/tickerTape">
            <TickerTape />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
`;
