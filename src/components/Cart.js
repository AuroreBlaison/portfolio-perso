import React from 'react'
import motif from '../img/motif.jpg'

const Cart = () => {

    // besoin d'un state projet sur le meme modele que le state competences pour generer les card via un .map
  return (
    <div className="cart">
        {/* <img src={motif} alt="" /> */}
        <div className="description">
            <h2>Section en Construction</h2> 
        </div>

        {/* mettre une balise a pour faire une redirection avec un attribut pour ouvrir dans une nouvelle page / onglet */}
        {/* <button>découvrir le projet</button> */}
    </div>
  )
}

export default Cart