import { useContext } from 'react'

import { useState } from 'react'
import '../styles/Cart.css'
import { useCart } from '../utils/hooks'
import { CartIsOpenContext } from '../utils/context'


function Cart() {
	const { cart, updateCart} = useCart()
	const { isOpen, setIsOpen } = useContext(CartIsOpenContext)
	const [cartValidation, setCartValidation] = useState(false)

	if (isOpen) {
		window.scrollTo({
			top : 0,
			behavior : 'smooth',
		}) ;
	}
	
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	const itemsInCart = cart.reduce(
		(acc, item) => acc + parseInt(item.amount),
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
					<p className='lmj-cart-validation'>Merci d'avoir passé commande !</p>
				</div>
			)
			: (
				<div className='lmj-cart-closed'>
					<button className='lmj-cart-toggle-button' onClick={openCart}>🛒 Ouvrir le Panier ({ itemsInCart } article(s))</button>
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
			<button className='lmj-cart-toggle-button' onClick={openCart}>🛒 Ouvrir le Panier ({ itemsInCart } article(s))</button>
		</div>
	)

  }
  
export default Cart