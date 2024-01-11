import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onRaisePrice, onRemovePlant}) {
  return (
    <ul className="cards">{plants.map( 
      plant => <PlantCard plant={plant} key={plant.id} onRaisePrice={onRaisePrice} onRemovePlant={onRemovePlant}/>
      )}</ul>
  );
}

export default PlantList;
