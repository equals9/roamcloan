import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AiOutlineCloudUpload, AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";
import Context from "../hooks/Context";
import * as MQ from "../styles/mediaQueries";

const New = () => {
  const [note, setNote] = useState({
    t: undefined,
    c: moment(),
    n: undefined,
    h: undefined,
    d: undefined
  });
  const { setDb } = useContext(Context);
  const onSubmit = (e) => {
    e.preventDefault();
    setDb({ type: "ADD", note });
    setNote({
      t: undefined,
      c: undefined,
      n: undefined,
      h: undefined,
      d: undefined
    });
  };
  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <BtnWrap>
        <Btn type="submit">
          <Save />
        </Btn>
        <Link to="/">
          <Close />
        </Link>
      </BtnWrap>
      <Paper>
        <Title
          placeholder="Note title"
          autofocus={true}
          value={note.t}
          onChange={(e) => setNote({ ...note, t: e.target.value })}
        />
        <Refs
          placeholder="Reference notes"
          value={note.r}
          onChange={(e) => setNote({ ...note, h: e.target.value })}
        />
        <Refs
          placeholder="Due date"
          value={note.d}
          onChange={(e) => setNote({ ...note, d: e.target.value })}
        />
        <Note
          placeholder="Note"
          value={note.n}
          onChange={(e) => setNote({ ...note, n: e.target.value })}
        />
      </Paper>
    </Form>
  );
};

export default New;

const Form = styled.form`
  font: 400 16px Ubuntu Mono;
  margin: 0;
  padding: 0;
  max-width: 768px;
  margin: 24px auto;
  @media (max-width: ${MQ.Phone}) {
    width: 300px;
  }
`;

const Paper = styled.div`
  display: flex;
  flex-flow: column;
  height: 80vh;
  max-width: 768px;
  margin: 12px auto;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  @media (max-width: ${MQ.Phone}) {
    height: 300px;
  }
`;

const Title = styled.input`
  width: 90%;
  padding: 0 5%;
  margin: 24px auto 5px auto;
  outline: none;
  border: none;
  display: block;
  font: inherit;
  font-size: 32px;
`;

const Refs = styled.input`
  width: 90%;
  padding: 0 5%;
  margin: 0 auto;
  outline: none;
  border: none;
  display: block;
  font: inherit;
  font-size: 13px;
`;

const Note = styled.textarea`
  width: 90%;
  padding: 0 5%;
  margin: 24px auto;
  outline: none;
  border: none;
  display: block;
  font: inherit;
  font-size: 18px;
  flex-grow: 1;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Btn = styled.button`
  border: none;
  background-color: white;
  outline: none;
  margin: 0;
  padding: 0;
  display: block;
`;

const Save = styled(AiOutlineCloudUpload)`
  width: 50px;
  font-size: 25px;
  padding: 0;
  marrgin: 0;
`;

const Close = styled(AiOutlineCloseCircle)`
  width: 50px;
  font-size: 25px;
  padding: 0;
`;
