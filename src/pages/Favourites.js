import React, { useState, useEffect, useRef } from 'react'
import axios from "axios";
import MealFavourites from '../components/MealFavourites';
import '../styles/Favourites.css';

function Favourites() {

    const [favouriteRecepies, setFavouriteRecepies] = useState(null);
    const [imageRecepi, setImageRecepi] = useState(null);
    const divSlider = useRef(null);
    const [clicks, setClicks] = useState(0);
    const [xCorrector, setXcorrector] = useState(650);
     
    //OBTIENE RECETAS DE LA BASE DE DATOS
    useEffect(()=>{
        axios
        .get('http://localhost/proyecto_fct/api/')
        .then(function (response) {
          setFavouriteRecepies(response.data);
          setClicks(Math.trunc((response.data.length/6)-1));
        });

    }, [])
    
    //MANUAL CARROUSEL
    function slideLeft(){
     
     if(xCorrector >= 650){
      var res = xCorrector - 650;
      divSlider.current.style.right = `${res}px`;
      setXcorrector(xCorrector=> xCorrector - 650);
     }
    }
    function slideRight(){
        if(clicks >= 0){
          setClicks(clicks=>clicks - 1);
          divSlider.current.style.right = `${xCorrector}px`;
          setXcorrector(xCorrector=>xCorrector + 650);
        }else{
          divSlider.current.style.right = '0px';
          setXcorrector(xCorrector=>xCorrector = 650);
          setClicks(Math.trunc((favouriteRecepies.length/6)-1));
        }
    }


  return (
    <>
      <h1 className='mealFavourites__title'>My Recipes</h1>
      <section className="favourites">
        <button className='favourites__chevron' onClick={slideLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </button>
        <div className='mealFavourites-main'>
          <div ref={divSlider} className="mealFavourites-main__inner">
          {
          favouriteRecepies ? 
          favouriteRecepies.map((recepi)=>{
            return(
            <MealFavourites key={recepi.id} recepi={recepi} setImageRecepi={setImageRecepi}/>
            );
          })
          
          :
          <span>No recepies added</span>
          }
          </div>
        </div>
        <button className='favourites__chevron' onClick={slideRight}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
        <div className='favourites__img-container'>
          <img src={imageRecepi} alt=""></img>
        </div>
      </section>
    </>
  )
}

export default Favourites