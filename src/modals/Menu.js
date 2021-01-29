import React, { useState, useContext } from "react";
import Modal from "react-modal";
import styled from "styled-components";

import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Context from "../hooks/Context";

const Pages = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState("");
  const [type, setType] = useState("tags");
  const { tags, dates, setFilter } = useContext(Context);

  const handleHide = (e) => {
    if (e) {
      if (e.parent === e.txt) {
        if (hide === e.txt) {
          return setHide("");
        }
        return setHide(e.txt);
      }
      if (hide === e.parent + " " + e.txt) {
        return setHide("");
      }
      return setHide(e.parent + " " + e.txt);
    }
    if (!!hide) {
      return setHide("");
    }
  };

  return (
    <>
      <Menu onClick={() => setOpen(!open)} />
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
        <FlexE>
          <Close onClick={() => setOpen(false)} />
        </FlexE>
        <BtnWrap>
          <Btn onClick={() => setType("tags")}>Pages</Btn>
          <Btn onClick={() => setType("dates")}>Dates</Btn>
        </BtnWrap>
        {type === "tags" ? (
          <div>
            {tags.map((ele, ind) => {
              return (
                <Tags
                  key={ind}
                  hide={
                    hide === ""
                      ? 0
                      : ele.parent.includes(hide) && ele.txt !== ele.parent
                      ? 1
                      : 0
                  }
                  lvl={ele.lvl}
                  onClick={() => handleHide(ele)}
                >
                  {ele.txt === hide ? (
                    <MdArrowDropUp onClick={() => handleHide(ele)} />
                  ) : (
                    <MdArrowDropDown onClick={() => handleHide(ele)} />
                  )}
                  <Tag>{ele.txt}</Tag>
                </Tags>
              );
            })}
          </div>
        ) : (
          <div>
            {dates.map((ele, ind) => {
              return (
                <Tag onClick={() => setFilter(["dates", ele])} key={ind}>
                  {ele}
                </Tag>
              );
            })}
          </div>
        )}
      </Modal>
    </>
  );
};

export default Pages;

const Menu = styled(AiOutlineMenu)`
  width: 50px;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const Close = styled(AiOutlineCloseCircle)`
  width: 50px;
  font-size: 25px;
  padding: 0;
`;

const FlexE = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BtnWrap = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
`;

const Btn = styled.button`
  width: 100%;
`;

const Tags = styled.div`
  margin: 0;
  margin-left: ${(props) => props.lvl * 15}px;
  padding: 0;
  display: ${(props) => (props.hide ? "none" : "flex")};
`;
const Tag = styled.div`
  margin: 0;
  padding: 0;
`;
