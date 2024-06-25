import { useState } from 'react'
import '../styles/Cart.css'


function Cart({cart, updateCart, isOpen, setIsOpen}) {
	// const [isOpen, setIsOpen] = useState(true)
	const [cartValidation, setCartValidation] = useState(false)

	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	function closeCart() {
		setIsOpen(false)
		setCartValidation(false)
	}

	function openCart() {
		setIsOpen(true)
		setCartValidation(false)
	}

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


	function validateCart(){
		setCartValidation(true)
		updateCart([])
	}
    
	if (cartValidation) {
		return (
			isOpen ? (
				<div className='lmj-cart'>
					<button
						className='lmj-cart-toggle-button'
						onClick={closeCart}
					>
						Fermer le panier
					</button>
					<h2>Panier</h2>
					<p>Merci d'avoir passé commande !</p>
				</div>
			)
			: (
				<div className='lmj-cart-closed'>
					<button className='lmj-cart-toggle-button' onClick={openCart}>🛒 Ouvrir le Panier</button>
				</div>
			)
		)
	}

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={closeCart}
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
			{cart.length !== 0 && (
				<div>
					<div className='lmj-clear-button-wrapper'><button className='lmj-clear-button' onClick={() => updateCart([])}>Vider le panier</button></div>
					<button className='lmj-validate-cart-button' onClick={validateCart}>Valider la commande</button>
				</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button className='lmj-cart-toggle-button' onClick={openCart}>🛒 Ouvrir le Panier</button>
		</div>
	)

  }
  
export default Cart