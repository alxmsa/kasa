import {Link} from 'react-router-dom'
import logo from '../assets/logoKasa.png'
import '../styles/Header.css'

function Header() {
    return (
        <nav className='nav_flex'>
            <img src={logo} alt='Logo Kasa Red' className='logo'></img>
            <div className='nav_kasa'>
                <Link to="/" className='title'>Accueil</Link>
                <Link to="/apropos" className='title'>À Propos</Link>
            </div>
        </nav>
    )
}

export default Header