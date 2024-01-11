import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchString, setSearchString] = useState("")

  useEffect( () => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then( data => setPlants(data))
  }, [])

  const submitForm = (formData) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => setPlants([...plants, data]))
  }


  const handleRaisePrice = (plant) => {
    console.log("raising")
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"price": plant.price + 1})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPlants(plants.map(plantOfPlants => plantOfPlants.id === plant.id ? data : plantOfPlants))
    })
  }

  const handleRemovePlant = (plant) => {
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPlants(plants.filter(plantOfPlants => plantOfPlants.id !== plant.id))
    })
  }

  const filteredPlants = searchString.length === 0 ? plants : plants.filter(plant => plant.name.toLowerCase().includes(searchString.toLowerCase()))


  return (
    <main>
      <NewPlantForm handleSubmitForm={submitForm}/>
      <Search searchString={searchString} onSearch={(e) => setSearchString(e.target.value)}/>
      <PlantList plants={filteredPlants} onRaisePrice={handleRaisePrice} onRemovePlant={handleRemovePlant}/>
    </main>
  );
}

export default PlantPage;
