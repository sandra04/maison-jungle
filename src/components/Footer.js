import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    // Modifie la valeur dans le state local à chaque changement de saisie
    function handleInput(e) {
		setInputValue(e.target.value)
	}

    // Vérifie la valeur lorsqu'on sort de l'input
	function checkEmail() {
		if (!inputValue.includes('@')) {
			alert("Merci d'entrer une adresse email valide")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-title'>
				<h2>L'univers des passionné·e·s de plantes 🌿🌱🌵</h2>
			</div>
            <div className="lmj-footer-email">
				<p>Je m'abonne à la newsletter :</p>
				<input
                	placeholder='Entrez votre adresse email'
                	value={inputValue}
                	onChange={handleInput}
					onBlur={checkEmail}
           		/>
				<button onClick={checkEmail}>Valider</button>
			</div>
		</footer>
	)
}
// Autre possibilité sur onChange : { (e)=>handleInput(e.target.value) }
/* Fonction associée :
function handleInput(value) {
		setInputValue(value)
	}
*/

export default Footer