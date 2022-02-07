import "./App.css";
import styled from "styled-components";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";

const Container = styled.div`
  height: 250px;
  border: 1px solid #ccc;
  margin: 20px;
  border-radius: 20px;
`;

function App() {
  return (
    <>
      <Container>
        <Toggle />
      </Container>
      <Container>
        <Modal />
      </Container>
      <Container>
        <Tab />
      </Container>
      <Container>
        <Tag />
      </Container>
      <Container>
        <AutoComplete />
      </Container>
      <Container>
        <ClickToEdit />
      </Container>
    </>
  );
}

export default App;
