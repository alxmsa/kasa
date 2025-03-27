import logo from '../assets/logoKasaWhite.png'

function Footer() {
    return (
        <footer className='footer'>
            <img className='footer_img' src={logo} alt="Logo Kasa White" />
            <p className='footer_p'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer