import { useState } from "react";

function Hooks() {
  // 值，寫入的方法
  const [a, setA] = useState(1);

  const [text, setText] = useState("");

  function handleOnClick() {
    setA(a + 1);
    console.log(a);
  }

  function handleOnChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      Hooks
      <button onClick={handleOnClick}>{a}</button>
      <input type="text" value={text} onChange={handleOnChange} />
      {text}
    </div>
  );
}

export default Hooks;
