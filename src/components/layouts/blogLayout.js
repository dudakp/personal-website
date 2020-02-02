import { faBoxes, faChild, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../styles/blogLayout.scss';

const SideMenu = props => (
  <div class="menu sticky">
    <p class="menu-label">
      <b>Underrected</b>
    </p>
    <ul class="menu-list">
      <li>
        <a>
          <FontAwesomeIcon
            icon={faHome}
            className="menu-icon"
          ></FontAwesomeIcon>{' '}
          Home
        </a>
      </li>
      <li>
        <a>
          <FontAwesomeIcon
            icon={faBoxes}
            className="menu-icon"
          ></FontAwesomeIcon>
          Categories
        </a>
      </li>
      <li>
        <a>
          <FontAwesomeIcon
            icon={faChild}
            className="menu-icon"
          ></FontAwesomeIcon>{' '}
          Home About
        </a>
      </li>
    </ul>
  </div>
);

export default ({ children }) => (
  <div className="container">
    <div class="hero-body has-text-centered" style={{ paddnigTop: 0 }}>
      <div class="container">
        <h1 class="title title-blog"> Underreacted </h1>
        <h2 class="subtitle">Pavol Dudak | Hope you will to code from me </h2>
      </div>
    </div>
    <hr></hr>
    <div className="columns">
      <div class="column">
        <SideMenu></SideMenu>
      </div>
      <div className="column is-half"> {children} </div>
      <div className="column"></div>
    </div>
  </div>
);
