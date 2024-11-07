import { useNavigate } from 'react-router-dom';
import '../styles/Gallery.css';
import annonces from '../datas/annonces.json';

function Gallery() {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/logements/${id}`);
    }

    return (
        <div>
            <ul className='list_annonces'>
                {annonces.map(({id, title, cover}) => (
                    <li key={id} className='item'onClick={() => handleClick(id)}>
                        <h2 className='gallery_h2'>{title}</h2>
                        <img alt={title} src={cover} className='gallery_img' />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Gallery