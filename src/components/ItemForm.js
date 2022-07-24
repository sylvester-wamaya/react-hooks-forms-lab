import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const[name, setName]=useState("");
  const [category, setCategory]=useState("produce")

  function nameChange(event){
    setName(event.target.value)
  }
  function handleCategory(event){
    setCategory(event.target.value)
  }
  function submitForm(event){
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    })
  }
  return (
    <form className="NewItem" onSubmit={submitForm} >
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={nameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
