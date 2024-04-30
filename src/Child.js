// import React from 'react';

// function Child({ onDataReceived }) {
//   const object = {
//     name: 'QASid'
//   };

//   // Trigger the callback function with the data
//   const sendDataToParent = () => {
//     onDataReceived(object);
//   };

//   return (
//     <>
//       <div>I am Child</div>
//       <button onClick={sendDataToParent}>Send Data to Parent</button>
//     </>
//   );
// }

// export default Child;
import { useData } from './DataContext'; // Import the useData hook

function Child() {
  const { updateData } = useData(); // Access the updateData function from context

  const object = {
    name: 'QASid',
  };

  const sendDataToParent = () => {
    updateData(object); // Update the data in the context
  };
  const sendDatatoCh2 =()=>{
    updateData(object);

  }
  return (
    <>
      <div>I am Child</div>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
      <button onClick={sendDatatoCh2}>SEND to CH@</button>
    </>
  );
}

export default Child;
