import React from 'react'
import sushi1 from '../img/sushi1.jpg';
import sushi2 from '../img/sushi2.jpg';
import sushi3 from '../img/sushi3.jpg';

function FrontPage() {
  return (
    <section className='home'>
        <div className='home__container-title'>
          <h2>Do you need a recipe that suits you?</h2>
          <p>Just introduce the number of calories and 
            magic will be done! 
          </p>
        </div>
        <div className='home__container-img'>
            <div className='home__container-img-item'>
              <img src={sushi1} alt="Food 1" />
              <div>
                <p>Just the calories you need</p>
              </div>
            </div>
            <div className='home__container-img-item'>
             <img src={sushi2} alt="Food 2"/>
             <div>
              <p>Healthy ingredients</p>
             </div>
            </div>
            <div className='home__container-img-item'>
             <img src={sushi3} alt="Food 3"/>
             <div>
                <p>Easy recipes to cook</p>
             </div>
            </div>
        </div>
    </section>
  )
}

export default FrontPage