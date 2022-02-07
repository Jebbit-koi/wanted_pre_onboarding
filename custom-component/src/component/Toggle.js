import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ToggleBtn = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  cursor: pointer;

  > .toggle {
    width: 70px;
    height: 35px;
    background-color: #808080;
    border-radius: 30px;
    transition: all 0.2s ease;

    &.toggle-on {
      background-color: #fcb005;
    }
  }

  > .circle {
    position: absolute;
    width: 33px;
    height: 33px;
    top: 1px;
    left: 1px;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.2s ease;

    &.toggle-on {
      left: 36px;
    }
  }
`;

const Span = styled.span`
  font-size: 20px;
`;

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const toggleHandler = () => {
    setIsToggleOn(!isToggleOn);
    console.log(isToggleOn);
  };

  return (
    <>
      <h1>Toggle</h1>
      <Container>
        <ToggleBtn onClick={toggleHandler}>
          <div className={`toggle ${isToggleOn ? "toggle-on" : ""}`}></div>
          <div className={`circle ${isToggleOn ? "toggle-on" : ""}`}></div>
        </ToggleBtn>
        <Span>Toggle Switch {`${isToggleOn ? "ON" : "OFF"}`}</Span>
      </Container>
    </>
  );
}

export default Toggle;
