import React from "react";
import styled from "styled-components";
import Link from "next/link";
import * as Theme from "../theme/theme.js";

const Container = styled.header`
  background: ${Theme.PrimaryText};
  height: ${Theme.NavHeight}px;
  ${"" /* Accommodate bottom border */};
  line-height: ${Theme.NavHeight - 3}px;
`;

const Nav = styled.nav`
  ${Theme.Container()};
  box-sizing: border-box;
  height: 100%;
  position: relative;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -20px;
`;

const HeaderLinkStyled = styled.div`
  &:first-of-type {
    float: left;
  }

  &:last-of-type {
    float: right;
  }

  & a {
    ${Theme.FontFancy()};
    color: ${Theme.Background};
    font-size: 20px;
    text-decoration: none;
    border-bottom: 1px solid ${Theme.Background};
    transition: color 150ms ease-in-out, border 150ms ease-in-out;

    &:hover {
      border-color: ${Theme.PrimaryColor};
      color: ${Theme.PrimaryColor};
    }
  }
`;

const HeaderLink = ({ href, title }) => (
  <HeaderLinkStyled>
    <Link href={href}>
      <a title={title} target="_blank">
        {title}
      </a>
    </Link>
  </HeaderLinkStyled>
);

const Header = () => (
  <Container>
    <Nav>
      <HeaderLink
        href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
        title="What is JavaScript?"
      />
      <Logo src="static/assets/logo.svg" alt="JavaScript is not Java logo" />;
      <HeaderLink
        href="https://java.com/en/download/faq/whatis_java.xml"
        title="What is Java?"
      />
    </Nav>
  </Container>
);

export default Header;
