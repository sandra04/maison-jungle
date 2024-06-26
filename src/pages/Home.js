import { useState, useEffect, useContext } from 'react'

import Cart from '../components/Cart'
import ShoppingList from '../components/ShoppingList'
import { CartIsOpenContext } from '../utils/context'

import '../styles/Layout.css'


function Home() {


  /*// On récupère le contenu sauvegardé dans local storage, au chargement de la page
	const savedCart = localStorage.getItem('cart')

  // Si on a un panier sauvegardé dans le local state, il s'agit de la valeur initiale du composant cart, sinon le tableau est vide
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])*/
    // const [isOpen] = useState(true)
    const { isOpen } = useContext(CartIsOpenContext)
  // On met à jour notre sauvegarde dans le local storage à chaque que le contenu du panier est modifié
  /*useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])*/


  return (
    <div>
      <div className='lmj-layout-inner'>
        <Cart />
        {isOpen ? null : <ShoppingList />}
        {/*<Cart cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} />*/}
        {/*isOpen ? null : <ShoppingList cart={cart} updateCart={updateCart} setIsOpen={setIsOpen} />*/}
      </div>
    </div>
  )
}


export default Home