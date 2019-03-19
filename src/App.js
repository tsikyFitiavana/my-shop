import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import AffichageProd from './MesPackets/AffichageProd'
import AjouterProd from './MesPackets/AjouterProd'

import './App.css'

const App = () => {
  const ProduitsData = [
  ]

  const [Produits, setProduits] = useState(ProduitsData)
  const [count, setCount] = useState(0)
  
  const addProduit = produit => {
		produit.id = count
		setProduits([ ...Produits, produit ])
  }  
  return (
    <div>
    <div className="container"> 
        <AjouterProd addProduit={addProduit} setCount={setCount} count={count}/>
        <AffichageProd Produits={Produits}/>
          
    </div>
  </div>
  )
  
}

export default App