import React, { Fragment } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss'

const tempArray = [{
  firstName: 'Rajkumar',
  lastName: 'Arisetty',
  email: 'rajkumararisetty1993@gmail.com',
  age: 26,
  onlineStatus: true,
}]

function App() {
  return (
    <Fragment>
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" tempArray={tempArray} />
      </section>
    </Fragment>
  );
}

export default App;
