import React, { useState, useContext } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Context from "../hooks/Context";
import moment from "moment";
import { FaRegPlusSquare } from "react-icons/fa";
import { AiOutlineCloudUpload, AiOutlineCloseCircle } from "react-icons/ai";
import * as MQ from "../styles/mediaQueries";

const New = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [txt, setTxt] = useState("");
  const [due, setDue] = useState("");
  const [tag, setTag] = useState("");
  const { setDb } = useContext(Context);
  const onSubmit = (e) => {
    e.preventDefault();
    const created = moment().format("YYYY-MM-DD");
    const note = {
      t: title,
      c: created,
      n: txt,
      h: tag,
      d: due ? moment(due).format("YYYY-MM-DD") : ""
    };
    setDb({ type: "ADD", note });
    setTitle("");
    setTxt("");
    setTag("");
    setDue("");
    setOpen(false);
  };
  return (
    <>
      <Add onClick={() => setOpen(!open)} />
      <Modal
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          },
          content: {
            // position: "absolute",
            // top: "40px",
            // left: "40px",
            // right: "40px",
            // bottom: "40px",
            maxWidth: "760px",
            margin: "50px auto",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "15px",
            outline: "none",
            padding: "20px"
          }
        }}
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        contentLabel="Pages View"
        ariaHideApp={false}
      >
        <Form onSubmit={(e) => onSubmit(e)}>
          <BtnWrap>
            <Btn type="submit">
              <Save />
            </Btn>
            <Close onClick={() => setOpen(false)} />
          </BtnWrap>
          {/* <Paper> */}
          <Title
            placeholder="Note title"
            autofocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Refs
            placeholder="Reference notes"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <Refs
            placeholder="Due date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
          />
          <Note
            placeholder="Note"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
          />
          {/* </Paper> */}
        </Form>
      </Modal>
    </>
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
  margin: 0;
  padding: 0 5%;
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
  margin: 0;
`;

const Close = styled(AiOutlineCloseCircle)`
  width: 50px;
  font-size: 25px;
  padding: 0;
`;

const Add = styled(FaRegPlusSquare)`
  width: 50px;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;
