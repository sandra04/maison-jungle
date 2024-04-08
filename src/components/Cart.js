import { useState } from 'react'
import '../styles/Cart.css'


function Cart({cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	function handleQuantity(newQuantity, name, price) {
		if (newQuantity > 0) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{name, price, amount: newQuantity}
			])
		}
	}


	function removeFromCart(name){
		const plantRemovable = cart.find((plant) => plant.name === name)

		if (plantRemovable) {
			const cartWithPlantRemoved = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartWithPlantRemoved
			])
		}
	}
    
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer le panier
			</button>
			<h2>Panier</h2>
			{cart.map(({name, price, amount}, index) => 
				<div className="lmj-cart-item" key={`${name}-${index}`}>
					<p className="lmj-cart-item-title">{name} ({price}€)</p>
					<p className="lmj-cart-item-quantity">Quantité :</p>
					<input
						value={amount}
						onChange={(e) => handleQuantity(e.target.value, name, price)}
						type="number"
					/>
					<button className="lmj-cart-item-remove-button" onClick={() => removeFromCart(name)}>Retirer du panier</button>
				</div>
			)}
			{cart.length === 0 && <p className="lmj-cart-empty-message">Votre panier est actuellement vide</p>}
			<hr className="lmj-cart-separation"/>
			<h3>Total : {total}€</h3>
			{cart.length !== 0 && <button className='lmj-clear-button' onClick={() => updateCart([])}>Vider le panier</button>}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
		</div>
	)

  }
  
export default Cart