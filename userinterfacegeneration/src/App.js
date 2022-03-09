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
    console.log(Favorites)
  })

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
    console.log(data.url)
  }

  const addFavorite = () => {
      setFavorite(Favorites => [...Favorites, imgUrl])
      localStorage.setItem('pictureUrl', imgUrl)
  }
  
  return (
    <div className="myBody">
      <h1 style={{
        textAlign: 'center' 
      }}> Random Dog </h1>

      <div className="App">
        <img 
          style={{
            resizeMode: "contain",
            height: '100%',
            width: '100%'
          }}
          src={imgUrl}
          alt="Chien"
        /> 
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
  var dog = localStorage.getItem('pictureUrl');
  console.log(dog)
  return( 
    <div className= "myBody">
    <p>
        Favorites
    </p>
    <img 
    style={{
      resizeMode: "contain",
      height: '100%',
      width: '100%'
    }}
    src={dog}
    alt="Chien"
  /> 
  <nav>
    <Link className="button-red" to="/"> Home </Link>
  </nav>
  </div>
  )
}




export default App;

{/* <Router>
        <Routes>
          <Route path="/" element={Home}/>
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
      <Navbar/> */}
