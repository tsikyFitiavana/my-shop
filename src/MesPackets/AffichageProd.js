import React from 'react'
import './affichage.css'
import 'bootstrap/dist/css/bootstrap.css'
import Like from './Like'
import Exemple from './modalComponnent'

import 'react-confirm-alert/src/react-confirm-alert.css'

const AffichageProd = props => {
  return(
  <div className="row">
			
			{props.Produits.length > 0 ? (
				props.Produits.map(produit => (
          
          <div key = {produit.id} className="col-md-4">
					<div  className=" card">
						<div className="card-body">
            <h5 className="card-title">{produit.name}</h5>
              <div className="card-text" id="tronque">{produit.DescriptionProd}</div>

              <div id="adroit">{produit.prixProd}</div>
            
            </div>
            <div className="card-footer">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4" >
                <Like/>
              </div>
              <div className="col-md-4">
                <Exemple/>
              </div>
            </div>

            </div>
					</div>
          </div>
				))
			) : (
				<p>
				</p>
			)}

  </div>
  
)
}

export default AffichageProd