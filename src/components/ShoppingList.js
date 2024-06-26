import { useState, useEffect } from 'react'

import '../styles/ShoppingList.css'
import { plantList } from '../datas/plantList'
import { useCart } from '../utils/hooks'

import PlantItem from './PlantItem'
import Categories from './Categories'
import AddedToCart from './AddedToCart'


import { calculatePromotionPrice } from '../utils/tools'


function ShoppingList() {
	const { cart, updateCart} = useCart()
	const [selectedCategory, updateSelectedCategory] = useState("")
	const [addedToCart, setAddedToCart] = useState(false)
	
	// Parcourt le tableau pour ajouter chaque info sélectionnée à notre return (jusqu'au return final fourni par le dernier élément du tableau)
	const categories = plantList.reduce(
		// Acc = accumulator (initial value si elle existe ou return précédent) - Plant = current value (élément du tableau)
		(acc, plant) =>
			// Si le tableau existant contient déjà la catégorie de notre élément on le return tel quel, sinon on lui ajoute la catégorie de notre élément
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
			[] // initial value (notre résultat commence par un tableau vide auquel on ajoutera les différents noms de catégorie existants	
	)

	
	// On met à jour notre sauvegarde dans le local storage à chaque que le contenu du panier est modifié
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])


	
	function addToCart(name, price, percentage){
		let promotionPrice = 0
		if (percentage) {
			promotionPrice = calculatePromotionPrice(price, percentage)
		}
		
		// On vérifie si la plante est déjà dans le panier
		const currentPlantAdded = cart.find((plant) => plant.name === name)

		/* Si oui, on la retire du tableau "cart"
		Puis, on met le panier à jour :
		- on récupère le nouveau tableau créé ("cart" sans la valeur correspondant à la plante actuelle)
		- on y ajoute notre plante avec nom, prix et la nouvelle quantité (quantité précédente + 1)
		S'il y a une promo, on l'applique
		*/
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			if (promotionPrice !== 0) {
				updateCart([
					...cartFilteredCurrentPlant,
					{name, price: promotionPrice, amount: currentPlantAdded.amount + 1}
				])
			}
			else{
				updateCart([
					...cartFilteredCurrentPlant,
					{name, price, amount: currentPlantAdded.amount + 1}
				])
			}
		}
		/* 	Si non, on ajoute simplement le produit à notre panier :on récupère le tableau précédent et on y ajoute la nouvelle plante (avec nom, prix et quantité)
		S'il y a une promo, on l'applique également
		*/
		else{
			if (promotionPrice !== 0) {
				updateCart([
					...cart,
					{name, price: promotionPrice, amount: 1}
				])
			}
			else{
				updateCart([
					...cart,
					{name, price, amount: 1}
				])
			}
		}
		setAddedToCart(true)
	}

	return (
		<div className="lmj-main-content">
			<Categories categories={categories} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} />
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, name, price, category, cover, light, water, isSpecialOffer, percentage }) => 
					!selectedCategory || selectedCategory === category ? (
						<div key={id}>
							<PlantItem
								name={name}
								price={price}
								cover={cover}
								light={light}
								water={water}
								isSpecialOffer={isSpecialOffer}
							/>
							<button className="lmj-plant-list-add-button" onClick={() => addToCart(name, price, percentage)}>Ajouter au panier</button>
						</div>
					) : null
				)}
			</ul>
			{addedToCart ? <AddedToCart setAddedToCart={setAddedToCart}/> : null}
		</div>
	)

}

export default ShoppingList