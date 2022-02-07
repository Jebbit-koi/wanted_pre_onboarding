import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  > button {
    text-decoration: none;
    color: #fff;
    border: none;
    background-color: #fcb005;
    border-radius: 10px;
    height: 35px;
    width: 90px;
    cursor: pointer;
  }
`;

const Backdrop = styled.div`
  width: 100%;
  height: 250px;
  z-index: 9999;
  position: absolute;
  background-color: rgba(169, 169, 169, 0.7);
  top: -21px;
  left: 0;
  display: flex;
  align-items: center;
`;

const Dialog = styled.dialog`
  background-color: #fff;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10%;
  border: none;

  > span {
    cursor: pointer;
  }

  > div {
    margin-bottom: 60px;
    color: #fcb005;
  }
`;

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Container>
      <h1>Modal</h1>
      <DIV>
        <button onClick={modalHandler}>Open Modal</button>
      </DIV>
      {isModalOpen ? (
        <Backdrop onClick={modalHandler}>
          <Dialog open>
            <span onClick={modalHandler}>&times;</span>
            <div>Hello wanted!</div>
          </Dialog>
        </Backdrop>
      ) : null}
    </Container>
  );
}

export default Modal;
