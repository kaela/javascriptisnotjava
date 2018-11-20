import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";

import * as Theme from "../theme/theme.js";
import Header from "../components/header.js";
import Anchor from "../components/anchor.js";
import About from "../components/about.js";
// import Comparisons from "../components/comparisons.js";
import Comments from "../components/comments.js";
import Footer from "../components/footer.js";

const GlobalStyle = createGlobalStyle`
  html {
    background: ${Theme.PrimaryText};
  }

  body {
    ${Theme.FontFamily()};
    background: ${Theme.Background};
    color: ${Theme.PrimaryText};
    font-size: 20px;
    margin: 0;
    min-width: ${Theme.PhoneWidth}px;
    text-align: center;
  }

  img {
    vertical-align: top;
  }

  a {
    color: ${Theme.PrimaryColor};
    text-decoration: none;
  }

  h2 {
    ${Theme.FontHeader()};
    font-size: 24px;
  }

  p {
    line-height: normal;
    margin: 0;
    padding: 0;

    & + p {
      margin-top: ${Theme.Padding * 3}px;
    }
  }
`;

const Container = styled.div`
  ${Theme.Container()};
  margin-bottom: ${Theme.Padding * 6}px;
`;

export default () => (
  <>
    <GlobalStyle />
    <Head>
      <title>
        JavaScript is not Java - A funny comparison of JavaScript and Java
      </title>
    </Head>
    <div>
      <Header />
      <Container>
        <Anchor />
        <About />
        {/* <Comparisons /> */}
        <Comments />
      </Container>
      <Footer />
    </div>
  </>
);
