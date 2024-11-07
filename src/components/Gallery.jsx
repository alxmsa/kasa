import '../styles/Gallery.css';
import annonces from '../datas/annonces.json'

function Gallery() {

    return (
        <div>
            <ul className='list_annonces'>
                {annonces.map((title) => (
                    <li className='item'>
                        <div className='item-cover'>{title}</div>
                    </li>
                ))}
                <li className='item'>
                    <div className='item-cover'></div>
                </li>
                <li className='item'>
                    <div className='item-cover'></div>
                </li>
                <li className='item'>
                    <div className='item-cover'></div>
                </li>
                <li className='item'>
                    <div className='item-cover'></div>
                </li>
                <li className='item'>
                    <div className='item-cover'></div>
                </li>
                <li className='item'>
                    <div className='item-cover'></div>
                </li>

            </ul>
        </div>
    )
}

export default Gallery