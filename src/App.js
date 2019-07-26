import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import CharacterList from './components/CharacterList.js';

export default function App(props) {
  return <main>
    <Header />
    <TabNav />
    <AppRouter />
    <Switch>
      <Route exact path="/characters" component={CharacterList} />
    </Switch>
  </main>
}