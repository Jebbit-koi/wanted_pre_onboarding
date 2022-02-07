import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 15px;
`;

const InputBox = styled.div`
  border: 1px #ccc dashed;
  width: 100px;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;

  :focus {
    outline: transparent;
  }
`;

const EditInput = styled.input`
  width: 95px;
  height: 28px;
  text-align: center;
  font-size: 15px;
  :focus {
    outline: none;
    border: 1px #ccc dashed;
  }
`;

const iniState = {
  name: "김코딩",
  age: 20,
};

export default function ClickToEdit() {
  const [name, setName] = useState(iniState.name);
  const [age, setAge] = useState(iniState.age);

  return (
    <>
      <h1>ClickToEdit</h1>
      <Container>
        <label>이름</label>
        <Input value={name} valueHandler={(newValue) => setName(newValue)} />
      </Container>
      <Container>
        <label>나이</label>
        <Input value={age} valueHandler={(newValue) => setAge(newValue)} />
      </Container>
      <Container>
        <div className="view">
          이름 {name} 나이 {age}
        </div>
      </Container>
    </>
  );
}

export const Input = ({ value, valueHandler }) => {
  const inputEl = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (isEdit) {
      inputEl.current.focus();
    }
  }, [isEdit]);

  const clickHandler = () => {
    setIsEdit(!isEdit);
  };

  const blurHandler = () => {
    setIsEdit(false);
    valueHandler(newValue);
  };

  const inputHandler = (event) => {
    setNewValue(event.target.value);
  };

  return (
    <InputBox>
      {isEdit ? (
        <EditInput
          type="text"
          value={newValue}
          ref={inputEl}
          onBlur={blurHandler}
          onChange={inputHandler}
        />
      ) : (
        <span onClick={clickHandler}>{newValue}</span>
      )}
    </InputBox>
  );
};
