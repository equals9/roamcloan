import React, { useContext, useState } from "react";
import styled from "styled-components";
import Article from "../comps/Article";
import Context from "../hooks/Context";
import * as MQ from "../styles/mediaQueries";
import moment from "moment";

const Landing = () => {
  const { db, filter } = useContext(Context);
  const today = moment().format("YYYY-MM-DD");
  return (
    <div>
      <h1>{filter[1]}</h1>
      <Grid>
        {db &&
          db
            .filter((ele) => {
              if (filter[0] === "dates") {
                return ele.c === filter[1] || ele.d === filter[1];
              } else {
                return ele.h === filter[1];
              }
            })
            .map((ele, ind) => {
              return <Article ele={ele} key={ind} />;
            })}
      </Grid>
    </div>
  );
};
export default Landing;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 1rem;
  padding: 25px;
  @media (max-width: ${MQ.Tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media (max-width: ${MQ.Phone}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
