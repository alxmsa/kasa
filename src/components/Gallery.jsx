import '../styles/Gallery.css';
import annonces from '../datas/annonces.json'

function Gallery() {

    return (
        <div>
            <ul className='list_annonces'>
                {annonces.map(({title, cover}) => (
                    <li className='item'>
                        <h2 className='gallery_h2'>{title}</h2>
                        <img alt={title} src={cover} className='gallery_img' />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Gallery