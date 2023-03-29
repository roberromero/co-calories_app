import React from 'react'
import '../styles/SearchBox.css'
function SearchBox({getMealData, handleChange}) {

  return (
    <div className="search-box">
        <button className="search-box__button" onClick={getMealData}>Get your meal</button>
        <input className="search-box__input"
        type="number"
        placeholder="Calories (number)"
        onChange={handleChange}
        />
    </div>
  )
}

export default SearchBox