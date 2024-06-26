import { useState, useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import { useCart } from '../utils/hooks'
import { CartIsOpenContext } from '../utils/context'

import { plantList } from '../datas/plantList'
import CareScale from '../components/CareScale'
import AddedToCart from '../components/AddedToCart'
import Cart from '../components/Cart'
import '../styles/PlantPrecisions.css'
import { calculatePromotionPrice } from '../utils/tools'


function Product(){
    const { product: productName } = useParams()
    const { cart, updateCart} = useCart()
	const { isOpen, setIsOpen } = useContext(CartIsOpenContext)
    const [addedToCart, setAddedToCart] = useState(false)

    useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

    const currentPlant = plantList.find((plant) => plant.name === productName)
    const {
       name,
       price,
       description,
       cover,
       light,
       water,
       isSpecialOffer,
       percentage
    } = currentPlant

    let promotionPrice = 0
    if (percentage) {
        promotionPrice = calculatePromotionPrice(price, percentage)
    }

    function addToCart(name, price){
	
		const currentPlantAdded = cart.find((plant) => plant.name === name)

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
        console.log("Ajouté au panier")
        setAddedToCart(true)
	}

    return (
        <div>
            <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen
            ? null
            : (<section className='lmj-plant-precisions'>
                <Link className="lmj-plant-item-see-others" to={`/`}>Voir les autres plantes</Link>
                <div className="lmj-precisions-visual">{isSpecialOffer && <div className="lmj-precisions-sales">Soldes</div>}<img className='lmj-plant-precisions-cover' src={cover} alt={`${name} cover`} /></div>
                <h1 className="lmj-plant-precisions-title">{name}</h1>
                {percentage
                    ? <p className="lmj-plant-precisions-price">{promotionPrice}€ (<span class="lmj-plant-item-usual-price">{price} €</span>)</p>
                    : <p className="lmj-plant-precisions-price">{price}€</p>
                }
                <section className="lmj-plant-precisions-description">
                    <h2>Description de la plante :</h2>
                    <p>{description}</p>
                </section>
                <section className="lmj-plant-precisions-description">
                    <h2>Entretien de la plante :</h2>
                    <div className="lmj-plant-precisions-scales">
                        <section className="lmj-plant-precisions-scale"><h3>Arrosage :</h3><CareScale careType='water' scaleValue={water} /></section>
                        <section className="lmj-plant-precisions-scale"><h3>Ensoleillement :</h3><CareScale careType='light' scaleValue={light} /></section>
                    </div>
                </section>
                <button className="lmj-plant-list-add-button" onClick={() => addToCart(name, price, percentage)}>Ajouter au panier</button>
                {addedToCart ? <AddedToCart setAddedToCart={setAddedToCart}/> : null}
            </section>) }
        </div>
    )
}

export default Product