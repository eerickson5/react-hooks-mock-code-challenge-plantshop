import React, { useState } from "react";


function NewPlantForm({handleSubmitForm}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })

  const onChangeForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    handleSubmitForm(formData)
    setFormData({
      name: "",
      image: "",
      price: 0
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmitForm}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={onChangeForm}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={onChangeForm}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={onChangeForm}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
