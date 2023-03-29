import React from "react";
import Meal from "./Meal";
import '../styles/MealList.css';

export default function MealList({ mealData }) {
  //El objeto "mealData" se recibe como prop para acceder a los nutrientes
  const nutrients = mealData.nutrients;
  return (
    <main className="main">
      <section className="nutrients">
        <h1 className="nutrients__title">Macros</h1>
        <ul className="nutrients__list">
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
        {/* El método toFixed() convierte el valor de la variable a STRING */}
      </section>

      <section className="meals">
        {/* En la linea 22 accedemos al objeto mealData que nos llegó como prop desde App.js, 
        accedemos a él (mealData.meals) y lo recorremos con la función map() de javaScript */}
        {mealData.meals.map((meal) => {
          // En la linea 25 llamamos al componente <Meal /> el cual creara 3 tarjetas de alimentos con sus respectios datos
          //Le pasamos como prop "meal" que es un objeto el cual se manipulará en el componente Meal para acceder a la info de cada receta
          return <Meal key={meal.id} meal={meal} nutrients={nutrients} />;
        })}
      </section>
    </main>
  );
}