import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ToggleTheme from '../ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {

  return (
    <Wrapper desktop={desktop} theme={`dark`}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
