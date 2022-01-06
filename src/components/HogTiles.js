import React from "react";

function HogTiles( {hogs} ) {
  
  const displayTiles = hogs.map(hog => {
    return (
      <div className="ui eight wide column">
        <h2>{hog.name}</h2>
        <img src={hog.image} style={{ width:"50%" }}/>
      </div>
    )
  })

  return (
    <div className="ui grid container">
      {displayTiles}
    </div>
  )
}

export default HogTiles;