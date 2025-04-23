import {Link} from 'react-router-dom'
import logo from '../assets/logoKasa.png'

function Header() {
    return (
        <nav className='nav_flex'>
            <img src={logo} alt='Logo Kasa Red' className='logo'></img>
            <div className='nav_kasa'>
                <Link to="/kasa" className='title'>Accueil</Link>
                <Link to="/kasa/apropos" className='title'>À Propos</Link>
            </div>
        </nav>
    )
}

export default Header