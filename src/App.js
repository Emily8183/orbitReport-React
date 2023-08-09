import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import {useState} from "react";
import satData from "./components/satData.js"



function App() {
  const [sat, setSat] = useState(satData);

  //The Set method prevents duplicate elements. Get three orbitTypes: low, medium, and high.
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  
  //the function filterByType filters satData and saves the results in the variable sat
  const filterByType = (currentType) =>{
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  }
  return (
    <>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />      
    </>
  );
}

export default App;
