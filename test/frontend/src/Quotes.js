import React, { useState } from 'react';
import axios from 'axios';

function Quotes() {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [type, setType] = useState("");

  function getQuote() {
    axios.get('http://localhost:5000/products',{crossdomain: true})
      .then(response => {
        setName(response.data.name);
        setImageURL(response.data.imageURL);
        setType(response.data.type);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div>
      <button onClick={getQuote}>
        Generate Quote
      </button>
      <h1>{name}</h1>
      <h3>{"-" + imageURL}</h3>
      <h3>{"-" + type}</h3>
    </div>
  )
}

export default Quotes;
