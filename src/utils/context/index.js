import { createContext } from 'react'
import { useState } from 'react'


// On initialise le contexte
export const CartContext = createContext()

// On crée le Provider lié à notre contexte (il wrappera le plus haut composant parent des Composants qui ont besoin d'accéder aux données gérées ici)
// Il permet de gérer le state qui sera partagé aux enfants qui "se branchent" sur le contexte "CartContext"
export const CartProvider = ({ children }) => {
    const savedCart = localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

    return (
        <CartContext.Provider value={{ cart, updateCart }}>
            {children}
        </CartContext.Provider>
    )
}


export const CartIsOpenContext = createContext()

export const CartIsOpenProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <CartIsOpenContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </CartIsOpenContext.Provider>
    )
}