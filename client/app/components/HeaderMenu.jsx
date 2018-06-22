import React from 'react';

import {
  Menu,
} from 'semantic-ui-react';

const HeaderMenu = ({ handleMenuClick }) => (
  <Menu
    inverted
    pointing
    secondary
    size="large"
    stackable
  >
    <Menu.Menu position="right">
      <Menu.Item
        as="a"
        name="hello"
        href="#hello"
        active
        onClick={handleMenuClick}
      >
          Hello
      </Menu.Item>
      <Menu.Item
        as="a"
        name="work"
        href="#work"
        onClick={handleMenuClick}
      >
          Work
      </Menu.Item>
      <Menu.Item
        as="a"
        name="about"
        href="#about"
        onClick={handleMenuClick}
      >
          About
      </Menu.Item>
      <Menu.Item
        as="a"
        name="contact"
        href="#contact"
        onClick={handleMenuClick}
      >
          Contact
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default HeaderMenu;
