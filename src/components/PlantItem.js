import CareScale from './CareScale'
import '../styles/PlantItem.css'

// Récupère les valeurs indiquées en propriétés lors de l'appel du composant dans "ShoppingList.js" et indique quoi afficher en fonction des valeurs récupérées
// La key de chaque composant est définie lors de leur appel dans le tableau (ShoppingList.js)
function PlantItem({ name, price, cover, light, water, isSpecialOffer }) {
    return (
        <li className='lmj-plant-item'>
            {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            <p className="lmj-plant-item-title">{name}</p>
            <p className="lmj-plant-item-price">{price}€</p>
            <div className="lmj-plant-item-scales">
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}


export default PlantItem