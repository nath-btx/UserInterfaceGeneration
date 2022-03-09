import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </div>
  );
}


function Home() {
  
  const [Favorites, setFavorite] = useState([])

  useEffect(() => {
    if (Favorites.length > 0)
      localStorage.setItem('pictureUrl', Favorites.join(","))
  }, [Favorites])

  const [imgUrl, setImgUrl] = useState();
  useEffect(() => {
    fetchDog()
  }, [])
  const fetchDog = async() => {

    let data = await fetch("https://random.dog/woof.json")
    data = await data.json()
    if(data.url.endsWith(".mp4")){
      fetchDog()
    }
    else {
      setImgUrl(data.url)
    }
  }

  const addFavorite = () => {
      setFavorite(Favorites => [...Favorites, imgUrl])
  }
  
  return (
    <div className="myBody">
      <h1 style={{
        textAlign: 'center' 
      }}> Random Dog </h1>

      <div className="App">
        <img className="myImage" 
          style={{
            resizeMode: "contain",
            height: '60%',
            width: '60%',
            marginBottom: "5px",
          }}
          src={imgUrl}
          alt="Chien"
        /> 
        <br />
        <button className="button-green" onClick={(fetchDog)}> 
          Get another random dog
        </button><br/>
        <button className="button-red" onClick={(addFavorite)}>
          Add to favorite
        </button><br />
        <nav>
          <Link className="button-blue" to="/favoris"> Mes Favoris </Link>
        </nav>
        
      </div>
      </div>
  )
}

function Favoris() {
  var dog = localStorage.getItem('pictureUrl').split(",");

  // dog.forEach(element => {
  //   console.log("dogurl :" + element)
  // });


  return( 
    <div className= "myBody">
    <p>
        Favorites
    </p>
     {dog?.map( (element) => (
       <img className="myImage" 
       style={{
         resizeMode: "contain",
         height: '60%',
         width: '60%',
         marginBottom: "5px",
       }}
       src={element}
       alt="Chien"
      /> 
     ))}
  <nav>
    <Link className="button-red" to="/"> Home </Link>
  </nav>
  </div>
  )
}




export default App;
