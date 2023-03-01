import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // console.log(count)
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    console.log(`You clicked ${count} times`)
  });
  // console.log(count)
  

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;