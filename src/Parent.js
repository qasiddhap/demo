
    // function Parent() {
    //   const [childData, setChildData] = useState(null);

    //   // Define a function to receive data from Child
    //   const onDataReceivedFromChild = (data) => {
    //     // Process the received data as needed
    //     setChildData(data);
    //   };

    //   return (
    //     <>
    //       <div>I am the Parent</div>
    //       {/* Pass the callback function to Child */}
    //       <Child onDataReceived={onDataReceivedFromChild} />
    //       {/* Display the received data */}
    //       {childData && <div>Received Data from Child: {childData.name}</div>}
    //     </>
    //   );
    // }

    // export default Parent;
    import React from 'react';
    import { useData } from './DataContext'; // Import the useData hook

    function Parent() {
    const { data } = useData(); // Access the data from context
    
    return (
        <>
        <div>I am the Parent</div>
        {data && <div>Received Data from Child: {data.name}</div>}
        </>
    );
    }

    export default Parent;
