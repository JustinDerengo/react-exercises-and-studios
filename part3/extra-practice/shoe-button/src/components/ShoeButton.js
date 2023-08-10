

import { useState } from 'react';

// export default function ShoeButton() {
//    const [shoeCount, setShoeCount] = useState(0);

//    const handleClick = () => {
//       setShoeCount(shoeCount+1);
//    }

//    return (
//       <div>
//          <h1>{shoeCount} shoes have come down the line!</h1>
//          <button onClick={handleClick}>Add a shoe!</button>
//       </div>
//    );
// }

export default function Doorbell() {
   const[bell, setBell] = useState("");

   const handleClick = () => {
      setBell(bell += "you rang...");
   }

   return(
      <div>
         <h1>Ring the Doorbell!</h1>
         <p>{bell}</p>
         <button onclick="handleClick">Ring Bell</button>
      </div>
   );
}