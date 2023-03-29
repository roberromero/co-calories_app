import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/Meal.css';
import swal from 'sweetalert';

export default function Meal({ meal, nutrients }) {
  
  const [imageUrl, setImageUrl] = useState("");

//  Usamos el HOOK useEffect para obtener la url de la imagen
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=a9c67af1bbc541f89e3f051ab6266974&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  //Función para comprobar que la receta no existe en la base de datos
  function checkID(){
    axios.get('http://localhost/proyecto_fct/api/').then((response) => {

      var arrayIds = response.data.map(obj=>{
        return parseInt(obj.id);
      });
      var res = arrayIds.find(e=> e === parseInt(meal.id));
      if(res){
        swal("NO SAVED. That recepi is already in your list!");
      }else{
        saveData();
      }
    });
   
  }

  function saveData() {
              // Realiza el fetch de una forma más sencilla y con código más limpio (he tenido que instalarlo desde la terminal)
              // INSTALACIÓN : npm install axios
              // EXPORTAR: En la linea 2 se puede ver la importación
    axios({
      method: 'post',
      url: 'http://localhost/proyecto_fct/api/',
      data: {
        id: meal.id,
        title: meal.title,
        image:imageUrl,
        link: meal.sourceUrl,
        calories:nutrients.calories,
        readyInMinutes: meal.readyInMinutes,
        servings: meal.servings
      }
    });
    swal("Recipe stored in dataBase");
  } 
  
  return (
    <article className="meal-cards">
      <h1 className="meal-cards__title">{meal.title}</h1>
      <div className="meal-cards__container-img">
        <img src={imageUrl} alt="recipe" />
      </div>
      <div className="meal-cards__instructions">
        <p>Preparation time: {meal.readyInMinutes}</p>
        <p>Number of servings: {meal.servings}</p>
      </div>
      <div className="meal-cards__container-buttons">
        <button onClick={checkID}>Save</button>
        <a href={meal.sourceUrl}>Go to Recipe</a>
      </div>
    </article>
  );
  
  }

