import { useContext } from 'react'
import { CartIsOpenContext } from '../utils/context'


function AddedToCart({setAddedToCart}) {
    const { setIsOpen } = useContext(CartIsOpenContext)

    function seeCart() {
        setIsOpen(true)
        setAddedToCart(false)
    }


    return (
        <div className="lmj-added-to-cart">
            <p className="exit" onClick={() => setAddedToCart(false)}>X</p>
            <p>Le produit a été ajouté à votre panier</p>
            <button onClick={seeCart}>Voir mon panier</button>
        </div>

    )
}

export default AddedToCart