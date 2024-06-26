import { Link } from 'react-router-dom'

import CareScale from './CareScale'
import '../styles/PlantItem.css'
import { calculatePromotionPrice } from '../utils/tools'


function PlantItem({ name, price, cover, light, water, isSpecialOffer, percentage }) {

    let newPrice = calculatePromotionPrice(price, percentage)

    return (
        <li className='lmj-plant-item'>
            {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            <Link to={`/plante/${name}`}><img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} /></Link>
            <Link className="lmj-plant-item-title" to={`/plante/${name}`}>{name}</Link>
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