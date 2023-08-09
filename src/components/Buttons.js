import satData from "./satData.js"
import "./styling.css"


const Buttons = (prop) => {

   return(
      <div className="flex-container">
      {prop.displaySats.map((sat, id) => {
  
      return (  
     
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