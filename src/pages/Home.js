import React from 'react'
import FrontPage from '../components/FrontPage';
import MealList from '../components/MealList';
import '../styles/Home.css';


function Home({mealData}) {

 
  return (
    <>
    <FrontPage style={{display: mealData ? "none" : "block"}} />
    {mealData && <MealList mealData={mealData} />}
    </>
  )
}

export default Home