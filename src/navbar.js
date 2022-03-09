import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/Home">Accueil</Link>
    </li>
    <li>
      <Link to="/favoris">Mes Favoris</Link>
    </li>
  </div>
  );
}
export default navbar;