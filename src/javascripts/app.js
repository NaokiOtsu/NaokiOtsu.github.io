import React from 'react';
import { render } from 'react-dom';

import styles from '../stylesheets/app.css';

const Profile = () => (
  <div>
    <div className="profile-image">
      <section className="profile-info">
        <h1>Naoki Otsu</h1>
        <h2>Web Deloper</h2>
      </section>
      <img src="/images/profile_image.png" width="120" height="120" alt="Naoki Otsu" />
    </div>
  </div>
);

const Nav = () => (
  <ul className="nav-list">
    <li><a href="https://naokiotsu.github.io/blog/">Blog</a></li>
    <li><a href="https://naokiotsu.github.io/blog/profile/">Profile</a></li>
    <li><a href="https://twitter.com/melo15" target="_blank">Twitter</a></li>
    <li><a href="https://github.com/NaokiOtsu" target="_blank">Github</a></li>
  </ul>
);

const App = () => (
  <div className="container">
    <Profile />
    <Nav />
  </div>
);

render(
  <App />,
  document.getElementById('app')
);
