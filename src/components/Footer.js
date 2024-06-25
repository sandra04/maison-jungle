import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
	const [newsletterMessage, setNewsletterMessage] = useState('')

    // Modifie la valeur dans le state local à chaque changement de saisie
    function handleInput(e) {
		setInputValue(e.target.value)
	}

    // Vérifie la valeur lorsqu'on sort de l'input
	function checkEmail() {
		if (!inputValue.includes('@')) {
			setNewsletterMessage("Merci d'entrer une adresse email valide")
		}
	}

	function sendEmail() {
		checkEmail()
		setNewsletterMessage('Merci pour votre inscription à notre newsletter !')
	}

	if (newsletterMessage === 'Merci pour votre inscription à notre newsletter !') {
		return (
			<footer className='lmj-footer'>
				<div className='lmj-footer-title'>
					<h2>L'univers des passionné·e·s de plantes 🌿🌱🌵</h2>
				</div>
				<p className="validationMsg">{newsletterMessage}</p>
			</footer>
		)
	}
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-title'>
				<h2>L'univers des passionné·e·s de plantes 🌿🌱🌵</h2>
			</div>
			<div className="lmj-footer-email">
				<p>Je m'abonne à la newsletter :</p>
				{newsletterMessage ? <p className="error-msg">{newsletterMessage}</p> : null}
				<form>
					<input
						type="email"
						placeholder='Entrez votre adresse email'
						value={inputValue}
						onChange={handleInput}
						onBlur={checkEmail}
						required
					/>
					<button type="submit" onClick={sendEmail}>Valider</button>
				</form>
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