import { useState } from "react";
import styled from "styled-components";

const TabMenu = styled.ul`
  background-color: #d3d3d3;
  list-style: none;
  padding-left: 0;
  display: flex;
  margin: auto 40px;
  margin-bottom: 50px;

  .tab {
    width: 100%;
    cursor: pointer;
    padding-left: 20px;
  }

  .currentTab {
    background-color: #fcb005;
    color: white;
  }
`;

const Text = styled.div`
  text-align: center;
`;

function Tab() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    { name: "Tab1", text: "Tab menu ONE" },
    { name: "Tab2", text: "Tab menu TWO" },
    { name: "Tab3", text: "Tab menu THREE" },
  ];

  const tabHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <h1>Tab</h1>
      <TabMenu>
        {tabs.map((tab, index) => {
          return (
            <li
              key={tab.name}
              onClick={() => tabHandler(index)}
              className={currentTab === index ? "tab currentTab" : "tab"}
            >
              {tab.name}
            </li>
          );
        })}
      </TabMenu>
      <Text>{tabs[currentTab].text}</Text>
    </>
  );
}

export default Tab;
