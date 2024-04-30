import React from 'react';
import { useData } from './DataContext';

function Ch2() {
    const { data }=useData();

      return (
        <>
        {data &&  <div> RECEVCIVED DATA IS {data.name}</div>} 
        </>
  )
}

export default Ch2