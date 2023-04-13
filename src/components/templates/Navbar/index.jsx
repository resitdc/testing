import React from "react";
import { Container, Nav } from "components/atoms";
import ResitdcLogo from "assets/images/resitdc-logo.svg";

const Navbar = (props) => {
  const className = ["bg-black-1 p-4"];
  className.push(props.className);
  return (
    <Nav>
      <Container className="flex items-center">
        <a
          href="https://resitdc.id"
          target="_blank"
          className="flex items-center"
          rel="noreferrer"
        >
          <img
            src={ResitdcLogo}
            alt="Logo"
            className="w-10 h-10 mr-3"
          />
          <span
            className="text-white-1 font-bold text-xl"
          >
            resitdc
          </span>
        </a>
      </Container>
    </Nav>
  );
};

export default Navbar;
