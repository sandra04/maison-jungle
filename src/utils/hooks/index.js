import { useContext } from 'react'
import { CartContext } from '../context'



export function useCart(){
    const { cart, updateCart } = useContext(CartContext)
    return { cart, updateCart }
}