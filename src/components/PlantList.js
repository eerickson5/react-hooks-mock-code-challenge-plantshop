import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onRaisePrice}) {
  return (
    <ul className="cards">{plants.map( plant => <PlantCard plant={plant} key={plant.id} onRaisePrice={onRaisePrice}/>)}</ul>
  );
}

export default PlantList;
