import { useState, useEffect } from "react";
import styled from "styled-components";

const optionList = [
  "발란",
  "슬릭코퍼레이션",
  "코드스테이츠",
  "휴먼스케이프",
  "디어젠",
  "케어닥",
  "휴이노",
  "로콘",
  "앤씰",
  "데이터블",
  "페이히어",
  "그레이비랩",
  "오드컨셉",
  "더블엔씨",
  "넥슨코리아",
  "로그프레소",
  "BALAAN",
  "SLEEK",
  "sandbank",
  "CARVI",
  "collab ASIA",
  "caredoc",
  "HUINNO",
  "datable",
  "payhere",
  "doublenc",
  "NEXON",
];

const DIV = styled.div`
  margin: 10px 40px;
  font-size: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding-right: 10px;

  > input {
    flex: 1;
    outline: none;
    padding: 0 10px;
    margin: 0;
    border: none;
    font-size: 15px;
  }

  > div {
    cursor: pointer;
    margin-bottom: 1px;
  }
`;

const DropDownContainer = styled.ul`
  list-style-type: none;
  border: 1px solid #ccc;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;

  > li {
    padding: 0 10px;

    &:hover {
      background-color: #fcb005;
      color: #fff;
    }

    &.selected {
      background-color: #fcb005;
      color: #fff;
    }
  }
`;

export default function Autocomplete() {
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(optionList);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
    }
  }, [inputValue]);

  const inputHandler = (event) => {
    const { value } = event.target;
    if (value.includes("\\")) return;

    value ? setHasText(true) : setHasText(false);

    setInputValue(value);

    const filterRegex = new RegExp(value, "i");
    const optionResult = optionList.filter((option) =>
      option.match(filterRegex)
    );
    setOptions(optionResult);
  };

  const dropDownHandler = (clickedOption) => {
    setInputValue(clickedOption);
    const optionResult = optionList.filter(
      (option) => option === clickedOption
    );
    setOptions(optionResult);
  };

  const removeHandler = () => {
    setInputValue("");
  };

  const keyUpHandler = (event) => {
    if (
      event.getModifierState("Fn") ||
      event.getModifierState("Hyper") ||
      event.getModifierState("OS") ||
      event.getModifierState("Super") ||
      event.getModifierState("Win")
    )
      return;
    if (
      event.getModifierState("Control") +
        event.getModifierState("Alt") +
        event.getModifierState("Meta") >
      1
    )
      return;
    if (hasText) {
      if (event.code === "ArrowDown" && options.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (event.code === "ArrowUp" && selected >= 0) {
        setSelected(selected - 1);
      }
      if (event.code === "Enter" && selected >= 0) {
        dropDownHandler(options[selected]);
        setSelected(-1);
      }
    }
  };

  return (
    <>
      <h1>AutoComplete</h1>
      <DIV onKeyUp={keyUpHandler}>
        <InputContainer hasText={hasText}>
          <input type="text" onChange={inputHandler} value={inputValue} />
          <div onClick={removeHandler}>&times;</div>
        </InputContainer>
        {hasText ? (
          <DropDown
            options={options}
            dropDownHandler={dropDownHandler}
            selected={selected}
          />
        ) : null}
      </DIV>
    </>
  );
}

export const DropDown = ({ options, dropDownHandler, selected }) => {
  return (
    <DropDownContainer>
      {options.map((option, index) => (
        <li
          key={index}
          onClick={() => dropDownHandler(option)}
          className={selected === index ? "selected" : ""}
        >
          {option}
        </li>
      ))}
    </DropDownContainer>
  );
};
