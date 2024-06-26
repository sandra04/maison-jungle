import { Link } from 'react-router-dom'

import CareScale from './CareScale'
import '../styles/PlantItem.css'
import { calculatePromotionPrice } from '../utils/tools'

// Récupère les valeurs indiquées en propriétés lors de l'appel du composant dans "ShoppingList.js" et indique quoi afficher en fonction des valeurs récupérées
// La key de chaque composant est définie lors de leur appel dans le tableau (ShoppingList.js)
function PlantItem({ name, price, description, cover, light, water, isSpecialOffer, percentage, setItemDetails }) {

    let newPrice = calculatePromotionPrice(price, percentage)

    /* function showItem() {
        setItemDetails({
            name : name,
            price : price,
            description : description,
            cover : cover,
            light : light,
            water : water,
            isSpecialOffer : isSpecialOffer,
            percentage : percentage
        })
    }*/

    return (
        <li className='lmj-plant-item'>
            {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            <Link to={`/plante/${name}`}><img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} /></Link>
            <Link className="lmj-plant-item-title" to={`/plante/${name}`}>{name}</Link>
            {/*<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick={showItem} />
            <p className="lmj-plant-item-title" onClick={showItem}>{name}</p>*/}
            {percentage
                ? <p className="lmj-plant-item-price">{newPrice}€ (<span class="lmj-plant-item-usual-price">{price} €</span>)</p>
                : <p className="lmj-plant-item-price">{price}€</p>
            }
            <div className="lmj-plant-item-scales">
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}


export default PlantItem