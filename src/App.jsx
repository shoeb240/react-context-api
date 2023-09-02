import { useState } from "react";
import Content from "./components/Content"
import ThemeContext from "./contexts/ThemeContext";

function App() {
  let [bgColor, setBgColor] = useState();

  function changeBackground() {
    let color = bgColor === 'red' ? 'white' : 'red';
    setBgColor(color);
  }

  return (
    <ThemeContext.Provider value={{bgColor, changeBackground}}>
      <Content />
    </ThemeContext.Provider>
  )
}

export default App
