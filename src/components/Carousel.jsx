import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../styles/Carousel.css";
import { useParams } from 'react-router-dom';
import annonces from '../datas/annonces.json';

function Carousel1() {
    const { id } = useParams();
    const logement = annonces.find((item) => item.id === id);

    return (
        <Carousel className='carousel'>
            {logement.pictures.map((picture, index) => (
                <Carousel.Item key={index} >
                        <img className='carousel_img' alt='' src={picture}/>
                </Carousel.Item>
            ))}
        </Carousel>    
    )
}

export default Carousel1