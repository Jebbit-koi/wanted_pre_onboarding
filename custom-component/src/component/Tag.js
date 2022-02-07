import { useState } from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Container = styled.div`
  display: flex;
  border: 0.7px solid #fcb005;
  border-radius: 10px;
  width: 80%;
  text-align: center;
  font-size: 20px;

  > input {
    font-size: 20px;
    border: none;
    :focus {
      outline: transparent;
    }
  }
`;

const Ul = styled.ul`
  display: flex;

  > li {
    margin-right: 10px;
    list-style: none;
    border-radius: 10px;
    padding: 1px 6px;
    background-color: #fcb005;
    color: #fff;
  }
`;

const XBtn = styled.span`
  color: #696969;
  margin-left: 5px;
  cursor: pointer;
`;

function Tag() {
  const initialTags = ["wanted", "CodeStates"];
  const [tags, setTags] = useState(initialTags);

  const addTagHandler = (event) => {
    let { value } = event.target;
    const filtered = tags.filter((el) => el === value);
    if ((value !== "") & (filtered.length === 0)) {
      setTags([...tags, value]);
      event.target.value = "";
    }
  };

  const removeTagHandler = (tagToRemove) => {
    setTags(tags.filter((_, index) => index !== tagToRemove));
  };

  return (
    <>
      <h1>Tag</h1>
      <DIV>
        <Container>
          <Ul>
            {tags.map((tag, index) => (
              <li key={index}>
                <span>{tag}</span>
                <XBtn onClick={() => removeTagHandler(index)}>&times;</XBtn>
              </li>
            ))}
          </Ul>
          <input
            type="text"
            placeholder="Press enter to add tags"
            onKeyUp={(event) =>
              event.key === "Enter" ? addTagHandler(event) : null
            }
          />
        </Container>
      </DIV>
    </>
  );
}

export default Tag;
