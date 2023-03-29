import React from 'react'
import '../styles/MealFavourites.css'
// import axios from 'axios';

function MealFavourites({recepi, setImageRecepi}) {
    

    function handleMouseEnter(){
      setImageRecepi(recepi.image);
    }
    function handleMouseLeave(){
      setImageRecepi(recepi.image);
    }

    // function deleteRecepi(){
    //   axios.delete(`http://localhost/api/part/${recepi.id}/delete`)
    //   .then((res)=>{
    //     console.log(res);
    //   })
    // }
    
        return(
            <div className='card-recepi' key={recepi.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <p className='card-recepi__title'>{recepi.title}</p>
              <div className='card-recepi__container-spans'>
                <p className='card-recepi__info'>{recepi.calories} Calories</p>
                <p className='card-recepi__info'>{recepi.servings} Servings</p>
                <p className='card-recepi__info'>{recepi.readyInMinutes} Minutes</p>
              </div>
              <div className='card-recepi__img'>
                <img src={recepi.image} alt=""></img>
              </div>
              <a href={recepi.link} target="_blank" rel="noreferrer">View our full recipe</a>
              {/* <button onClick={deleteRecepi}> X </button> */}
              
            </div>
        );
}

export default MealFavourites