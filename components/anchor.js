import React from "react";
import styled from "styled-components";
import * as Theme from "../theme/theme.js";

const Container = styled.h1`
  ${Theme.Container()};
  padding: 30px 0;
`;

const FancyFont = styled.div`
  ${Theme.FontFancy()};
  font-size: 50px;
  font-weight: 700;
  margin-bottom: ${Theme.Padding}px;
  position: relative;
  text-align: center;
  z-index: 1;

  &:before {
    box-sizing: border-box;
    border-top: 5px solid ${Theme.PrimaryColor};
    content: "";
    margin: 5px auto 0;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }

  & > span {
    background: ${Theme.Background};
    padding: 0 30px;
  }
`;

const NormalFont = styled.div`
  ${Theme.FontHeader()};
  color: ${Theme.PrimaryColor};
  font-size: 5rem;
`;

const Anchor = () => (
  <Container>
    <FancyFont>
      <span>javascript</span>
    </FancyFont>
    <NormalFont>IS NOT</NormalFont>
    <FancyFont>
      <span>java</span>
    </FancyFont>
  </Container>
);

export default Anchor;
