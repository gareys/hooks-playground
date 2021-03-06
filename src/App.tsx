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
import { OrderTape } from './components/orderTape/OrderTape';
import { CssClock } from './components/clock/CssClock';
import { ClockScene } from './components/clock/ClockScene';

export const App = () => {
  return (
    <AppContainer>
      <Router basename="/hooks-playground">
        <Nav>
          <Link to="/">Home</Link>
          {` | `}
          <BackLink />
        </Nav>
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
          <Route path="/orderTape">
            <OrderTape />
          </Route>
          <Route path="/clock">
            <ClockScene />
          </Route>
          <Route path="/cssClock">
            <CssClock />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppContainer>
  );
};

const Nav = styled.nav`
  z-index: 999;
  position: relative;
`;
const AppContainer = styled.div`
  width: 100%;
`;
