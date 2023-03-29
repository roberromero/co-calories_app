import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";


//COMPONENTE <APP/>
function App() {

        //CREACION DE DOS VARIABLES CON HOOK useState
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  
        //LLAMADA A LA API OBTENCIÓN DE INFORMACIÓN
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=a9c67af1bbc541f89e3f051ab6266974&timeFrame=day&targetCalories=${calories}`
      
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  function handleChange(e) {
    setCalories(e.target.value);
  }


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
           <Home mealData={ mealData } />
           <SearchBox handleChange={ handleChange } getMealData={ getMealData } />
          </>
           
        }/>
        <Route path="favourites" element={ <Favourites /> } />
      </Routes>
       <Footer /> 
    </div>
  );
}

export default App;