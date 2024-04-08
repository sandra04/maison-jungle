import { useState } from 'react'

import '../styles/ShoppingList.css'
import { plantList } from '../datas/plantList'

import PlantItem from './PlantItem'
import Categories from './Categories'



function ShoppingList({cart, updateCart}) {
	const [selectedCategory, updateSelectedCategory] = useState("")
	
	// Parcourt le tableau pour ajouter chaque info sélectionnée à notre return (jusqu'au return final fourni par le dernier élément du tableau)
	const categories = plantList.reduce(
		// Acc = accumulator (initial value si elle existe ou return précédent) - Plant = current value (élément du tableau)
		(acc, plant) =>
			// Si le tableau existant contient déjà la catégorie de notre élément on le return tel quel, sinon on lui ajoute la catégorie de notre élément
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
			[] // initial value (notre résultat commence par un tableau vide auquel on ajoutera les différents noms de catégorie existants	
	)

	/* On ajoute une fonction "addToCart" qui prend en paramètre le nom et le prix de la plante
	On vérifie si la plante existe déjà dans le tableau "cart" (la liste des objets ajoutés au panier, créée dans App.js) => via la méthode "find()"

	Si elle existe, on la retire du tableau avec "filter()"
	Puis, on met la variable "cart" à jour avec "updateCart" :
	- on récupère le nouveau tableau créé ("cart" sans la valeur correspondant à la plante actuelle
	- on y ajoute notre plante avec nom, prix et la nouvelle quantité (on récupère la quantité précédente et on lui ajoute 1)

	Si elle n'existe pas, on met directement la variable "cart" à jour avec "updateCart" :
	- on récupère le tableau précédent et on y ajoute la nouvelle plante (avec nom, prix et quantité)
	*/
	function addToCart(name, price){
		const currentPlantAdded = cart.find((plant) => plant.name === name)

		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{name, price, amount: currentPlantAdded.amount + 1}
			])
		}
		else{
			updateCart([
				...cart,
				{name, price, amount: 1}
			])
		}
	}


	// Dans la liste <ul> "lmj-plant-list" je récupère les props de chaque élément de mon tableau pour les attribuer à l'item correspondant créé
	// !!! La prop "key" d'un élément n'a de signification que dans le cadre du tableau qui l'entoure. On la définit donc lors de l'appel des composants "PlantItem" (et non dans la fonction composant)
	
		return (
			<div className="lmj-main-content">
				<Categories categories={categories} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} />
				<ul className='lmj-plant-list'>
					{plantList.map(({ id, name, price, category, cover, light, water, isSpecialOffer }) => 
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
								<button className="lmj-plant-list-add-button" onClick={() => addToCart(name, price)}>Ajouter au panier</button>
							</div>
						) : null
					)}
				</ul>
			</div>
		)
	
}

export default ShoppingList