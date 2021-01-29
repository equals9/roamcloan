import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Clr from "../styles/colors";
import { FiSettings } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import useEventListener from "@use-it/event-listener";

// Modals
import Menu from "../modals/Menu";
import New from "../modals/New";

const Head = () => {
  const [open, setOpen] = useState(false);
  const ESCAPE_KEYS = ["27", "Escape"];
  const handler = ({ key }) => {
    if (ESCAPE_KEYS.includes(String(key))) {
      setOpen(!open);
      console.log("pressed");
    }
  };

  useEventListener("keydown", handler);
  return (
    <Header>
      <Wrapper>
        <Wrap>
          <Menu />
          <Search onClick={() => setOpen(!open)} type="submit" />
        </Wrap>
        {open ? (
          <Input autoFocus={true} />
        ) : (
          <>
            <Link to="/">
              <Logo>Momo</Logo>
            </Link>
            <Wrap>
              <New />
              <Link to="/settings">
                <Settings />
              </Link>
            </Wrap>
          </>
        )}
      </Wrapper>
    </Header>
  );
};

export default Head;

const Header = styled.header`
  background-color: ${Clr.Lightgrey};
  margin: 0;
  padding: 5px;
`;

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled(AiOutlineSearch)`
  width: 50px;
  font-size: 24px;
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: ${Clr.Lightgrey};
  border: 3px solid white;
  border-radius: 10px;
  outline: none;
  padding: 3px 10px 1px 10px;
  margin: 0;
`;

const Settings = styled(FiSettings)`
  width: 50px;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const Logo = styled.p`
  font-size: 20px;
  font-family: Orbitron;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Wrap = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
