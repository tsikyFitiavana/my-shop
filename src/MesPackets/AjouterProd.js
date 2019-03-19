import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './ajouterPro.css'

const AjouterProd = props => {
	const initialFormState = { id: null, name: '', prixProd: '', DescriptionProd:''}
	const [ produit, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...produit, [name]: value })
    
      } 
    
	return (
		<div className="container">
            <div className="ajoutProd">
                <form   
                    onSubmit={event => {
                        event.preventDefault()
                        if (!produit.name || !produit.prixProd || !produit.DescriptionProd) return

                        if(isNaN(produit.prixProd)){
                            var err = document.getElementById('addErreur')
                            err.innerHTML = 'Entrer un nombre'
                        }else{
                            var err2 = document.getElementById('addErreur')
                            err2.innerHTML = ''
                            props.addProduit(produit)
                            props.setCount(props.count +1)
                            setUser(initialFormState)
                        }
                    }} className="form-group">
                        <label>Produit</label>
                        <input type="text" name="name" value={produit.name} onChange={handleInputChange} />
                        <br/>
                        <br/>
                        <label>Prix</label>
                        <input type="text" name="prixProd" value={produit.prixProd} onChange={handleInputChange} />
                        <p id="addErreur"></p>
                        <br/>
                        <br/>
                        <label>Description</label>
                        <textarea type="text" name="DescriptionProd" value={produit.DescriptionProd} onChange={handleInputChange} ></textarea>
                        <br/>
                        <br/>
                        <button className="btn btn-info btn-sm">Ajouter</button>
                </form>
            </div>
		</div>
	)
}

export default AjouterProd