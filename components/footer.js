import React from "react";
import styled from "styled-components";
import Link from "next/link";
import * as Theme from "../theme/theme.js";

const Container = styled.header`
  background: ${Theme.PrimaryText};
  color: ${Theme.Background};
  height: ${Theme.NavHeight}px;
  ${"" /* Accommodate bottom border */};
  line-height: ${Theme.NavHeight - 3}px;
`;

const Content = styled.div`
  ${Theme.Container()};
`;

const P = styled.p`
  font-size: 16px;
  font-style: italic;
  margin: 0 auto ${Theme.Padding * 2}px;
`;

const SocialIcons = styled.div`
  margin-top: ${Theme.Padding}px;
  & img {
    background-color: ${Theme.PrimaryColor};
    margin: ${Theme.Padding / 2}px;
  }
`;

const SocialLink = ({ href, title, children }) => (
  <Link href={href}>
    <a title={title}>{children}</a>
  </Link>
);

const Footer = () => (
  <Container>
    <Content>
      <SocialIcons>
        <SocialLink href="http://linkedin.com/in/kaelanichols" title="linkedin">
          <img src="/static/assets/linkedin.svg" alt="LinkedIn" />
        </SocialLink>
        <SocialLink href="http://github.com/kaela" title="github">
          <img src="/static/assets/github.svg" alt="github" />
        </SocialLink>
      </SocialIcons>
      <P>
        javascriptisnotjava.io reserves the right to remove any content for any
        reason at any time. Because it's my site, and I can.
      </P>
    </Content>
  </Container>
);

export default Footer;
