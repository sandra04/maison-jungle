import { useState, useEffect } from 'react'

import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

import logo from '../assets/logo.png'
import '../styles/Layout.css'


function App() {

  // On récupère le contenu sauvegardé dans local storage, au chargement de la page
	const savedCart = localStorage.getItem('cart')

  // Si on a un panier sauvegardé dans le local state, il s'agit de la valeur initiale du composant cart, sinon le tableau est vide
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    const [isOpen, setIsOpen] = useState(true)

  // On met à jour notre sauvegarde dans le local storage à chaque que le contenu du panier est modifié
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen ? null : <ShoppingList cart={cart} updateCart={updateCart} setIsOpen={setIsOpen} />}
      </div>
      <Footer />
    </div>
  )
}


export default App