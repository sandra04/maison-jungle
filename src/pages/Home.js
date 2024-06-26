import { useContext } from 'react'

import Cart from '../components/Cart'
import ShoppingList from '../components/ShoppingList'
import { CartIsOpenContext } from '../utils/context'

import '../styles/Layout.css'


function Home() {

    const { isOpen } = useContext(CartIsOpenContext)


  return (
    <div>
      <div className='lmj-layout-inner'>
        <Cart />
        {isOpen ? null : <ShoppingList />}
      </div>
    </div>
  )
}


export default Home