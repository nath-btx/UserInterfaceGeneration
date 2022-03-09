import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect,  } from 'react';


function App() {

  const [imgUrl, setImgUrl] = useState();
  useEffect(() => {
    fetchDog()
  }, [])
  const fetchDog = async() => {

    let data = await fetch("https://random.dog/woof.json")
    data = await data.json()
    console.log(data.url)
    setImgUrl(data.url)
    // fetch("https://random-d.uk/api/v2")
    //       .then((response) => response.json()).then((data) => data.url)
  }
  
  return (
    <div className="App">
        <img 
        style={{
            resizeMode: "contain",
            height: '100%',
            width: '100%'
          }}
          src={imgUrl} alt="Chien"/> 
      
    </div>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flexDirection: "vertical",
//     justifyContent: "space-around",
//     alignItems: "center",
//     height: "100%",
//     textAlign: "center"
//   },
//   image: {
//     width: '100px',
//     length: '100px',
//   },
// });

      

export default App;
