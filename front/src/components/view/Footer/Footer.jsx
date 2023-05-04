import React from "react";
import { GitHub, LinkedIn, StyledDiv, StyledNavLink } from "./style-footer";

const Footer = () => {
  return (
    <StyledDiv>
      <p>Exequiel Marinzulich Pepperall</p>
      <p>Proyecto Integrador</p>
      <p>SoyHenry 2023</p>
      <div>
        <StyledNavLink to="https://github.com/ExeMarinzulich24" target="_blank">
          <GitHub />
        </StyledNavLink>
        <StyledNavLink
          to="https://www.linkedin.com/in/exequiel-marinzulich-pepperall-576ab5226/"
          target="_blank"
        >
          <LinkedIn />
        </StyledNavLink>
      </div>
    </StyledDiv>
  );
};

export default Footer;
