import './styles.css';

function Button() {

   function OnLearnMore() {
      alert("Big Splash")
   }
   return ( 
         <button onClick={OnLearnMore}>
            Learn More
         </button>
   );
}

export default Button;