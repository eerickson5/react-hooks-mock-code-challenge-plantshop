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
    const newPlant = {
      ...formData,
      //id: plants[plants.length - 1].id + 1
    }
   

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => setPlants([...plants, data]))
  }


  const filteredPlants = searchString.length === 0 ? plants : plants.filter(plant => plant.name.toLowerCase().includes(searchString.toLowerCase()))


  return (
    <main>
      <NewPlantForm handleSubmitForm={submitForm}/>
      <Search searchString={searchString} onSearch={(e) => setSearchString(e.target.value)}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
