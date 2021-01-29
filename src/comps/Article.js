import React from "react";
import styled from "styled-components";
import * as Clr from "../styles/colors";

const Article = ({ ele }) => {
  return (
    <Paper>
      <Title>{ele.t}</Title>
      <Tags># {ele.h}</Tags>
      <Due>@ {ele.d}</Due>
      <Note>{ele.n}</Note>
    </Paper>
  );
};

export default Article;

const Paper = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  padding: 12px 24px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  width: 250px;
  max-height: 250px;
`;

const Title = styled.h2`
  display: block;
  font-size: 24px;
  margin: 0;
  padding: 0;
`;

const Tags = styled.p`
  display: block;
  margin: 0;
  color: ${Clr.Grey};
  font-size: 14px;
  font-style: italic;
`;

const Due = styled.p`
  display: block;
  font-size: 14px;
  margin: 0;
  color: ${Clr.Grey};
`;

const Note = styled.p`
  display: block;
  font-size: 16px;
  max-height: 180px;
  margin: 12px 0 0 0;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  white-space: pre-wrap;
  outline: none;
`;
