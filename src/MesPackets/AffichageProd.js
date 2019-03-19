import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';



import 'react-confirm-alert/src/react-confirm-alert.css'

const AffichageProd = props => {
  function like(){
    
    
   document.getElementById('nbrLike').innerHTML = (parseInt(document.getElementById('nbrLike').innerHTML)+1);
  }
  return(
  <div className="row">
			
			{props.Produits.length > 0 ? (
				props.Produits.map(produit => (
          
          <div key = {produit.id} className="col-md-4">
					<div  className=" card">
            <img className="card-img-top" src="..." alt="my Card"/>
						<div className="card-body">
            <h5 className="card-title">{produit.name}</h5>
              <p className="card-text">{produit.DescriptionProd}</p>

              <div>{produit.prixProd}</div>
            
            </div>
            <div className="card-footer">
              <p onClick={()=>{like()}}>like</p>
              <label id="nbrLike"></label>
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