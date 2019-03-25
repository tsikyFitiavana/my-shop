import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './ajouterPro.css'

const AjouterProd = props => {
	const initialFormState = { id: null, name: '', prixProd: '', DescriptionProd:'',imageProd:''}
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
                    <table>
                        <tbody>
                            <tr>
                                <td><label>Produit</label></td>
                                <td><input className="alonger" type="text" name="name" value={produit.name} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td><label>Prix</label></td>
                                <td><input className="alonger" type="text" name="prixProd" value={produit.prixProd} onChange={handleInputChange} /><br/>
                                <p id="addErreur"></p>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Description</label></td>
                                <td><textarea className="alonger" type="text" name="DescriptionProd" value={produit.DescriptionProd} onChange={handleInputChange} ></textarea></td>
                            </tr>
                        </tbody>
                        
                    </table>
                        <label id="file"> File<input  type="file" name="fichier"/></label>
                        <br/>
                        <button className="btn btn-primary btn-md" id="agrandir">Ajouter</button>
                </form>
            </div>
		</div>
	)
}

export default AjouterProd