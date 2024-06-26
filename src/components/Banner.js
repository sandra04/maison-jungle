import { Link } from 'react-router-dom'

import '../styles/Banner.css'
import logo from '../assets/logo.png'


/* function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
} */

function Banner() {
    const title="La maison jungle"
    return <div>
        <Link className="lmj-banner" to={`/`}>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </Link>
    </div>
}

export default Banner