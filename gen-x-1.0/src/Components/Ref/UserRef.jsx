import React, { useRef } from 'react';

function UseRefComp() {
//   const inputRef = null
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const handleFocus1 = () => {
    if (inputRef1.current) {
      inputRef1.current.focus(); // Focus the input element
      inputRef1.current.style.backgroundColor = 'lightyellow'; // Focus the input element
      inputRef3.current.style.backgroundColor = 'Lightgreen'; // Focus the input element
    }

  };
  const handleFocus2 = () => {
    if (inputRef2.current) {
        inputRef2.current.focus(); // Focus the input element
        inputRef4.current.style.backgroundColor = 'lightblue'; // Focus the input element
        inputRef2.current.style.backgroundColor = 'Lightpink';
      }

  };




  return (
    <div>
      <input ref={inputRef1} type="text" placeholder="Click button to focus" />
      <button ref={inputRef3} onClick={handleFocus1}>Focus Input 1</button>
      <input ref={inputRef2} type="text" placeholder="Click button to focus" />
      <button ref={inputRef4} onClick={handleFocus2}>Focus Input 2</button>
    </div>
  );
}

export default UseRefComp;
