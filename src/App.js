import React, { Fragment } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss'

function App() {
  return (
    <Fragment>
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" />
      </section>
    </Fragment>
  );
}

export default App;
