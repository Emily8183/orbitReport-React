import satData from "./satData.js"
import "./styling.css"


const Buttons = (prop) => {

   return(
      <div className="flex-container">

      {/*loop in the three orbitTypes*/}
      {prop.displaySats.map((sat, id) => {
  
      return (  
     
      /*everytime clicks, filter out the same type of the satellites*/
         <button onClick={() => prop.filterByType(sat)} key={id}> 
             {sat} Orbit
         </button>
      )
      })}

      <button onClick={() => prop.setSat(satData)}>All Orbits</button>
      </div>
   );

}

export default Buttons;