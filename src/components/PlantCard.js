import React, { useState } from "react";

function PlantCard({plant, onRaisePrice, onRemovePlant}) {

  const [isInStock, setInStock] = useState(true)

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={ () => setInStock(!isInStock)}>In Stock</button>
      ) : (
        <button onClick={ () => setInStock(!isInStock)}>Out of Stock</button>
      )}

      <button onClick={ () => onRaisePrice(plant)} >Raise Price</button>
      <button onClick={ () => onRemovePlant(plant)} className="red">Remove</button>
    </li>
  );
}

export default PlantCard;
