import './styles.css';

function Button() {

      function onLearnMore () {
         alert("Gurgle Gurgle!");
      };
   return ( 
         <button onClick = {onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;