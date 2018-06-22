import React from 'react';

import {
  Menu, Transition,
} from 'semantic-ui-react';

const FixedMenu = ({ visible, handleMenuClick }) => (
  <Transition animation="slide down" duration={400} visible={visible}>
    <Menu fixed="top" size="large" inverted className="force-right">
      <Menu.Menu position="right">
        <Menu.Item
          as="a"
          name="hello"
          href="#hello"
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
  </Transition>
);

export default FixedMenu;
