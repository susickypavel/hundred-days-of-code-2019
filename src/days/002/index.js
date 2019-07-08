import React, { useState, createContext } from "react"

const { Provider, Consumer } = createContext({})

const Tab = ({ id, children }) => (
  <Consumer>{({ changeTab }) => <div onClick={() => changeTab(id)}>{children}</div>}</Consumer>
)

const TabPanel = ({ whenActive, children }) => (
  <Consumer>{({ activeTab }) => (activeTab === whenActive ? children : null)}</Consumer>
)

const TabSwitcher = ({ children }) => {
  const [activeTab, setTab] = useState("a")

  const changeTab = newTab => {
    setTab(newTab)
  }

  return <Provider value={{ activeTab, changeTab }}>{children}</Provider>
}

function Day2() {
  return (
    <div>
      <TabSwitcher>
        <Tab id="a">
          <button>a</button>
        </Tab>
        <Tab id="b">
          <button>b</button>
        </Tab>
        <TabPanel whenActive="a">
          <div>"A" Panel!</div>
        </TabPanel>
        <TabPanel whenActive="b">
          <div>"B" Panel!</div>
        </TabPanel>
      </TabSwitcher>
    </div>
  )
}

export default Day2
