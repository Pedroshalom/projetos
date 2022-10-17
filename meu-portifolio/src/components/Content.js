import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SobreMim from '../pages/SobreMIm';
import Home from '../pages/Home';
import Projetos from '../pages/Projetos';
import Solutions from '../pages/Solutions';

class Content extends React.Component {
  render() {
    return (
      <main className="Content">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/sobre-mim" component={ SobreMim } />
          <Route path="/solutions" component={ Solutions } />
          <Route path="/projetos" component={ Projetos } />
          </Switch>
      </main>
    );
  }
}

export default Content;
