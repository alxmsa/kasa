import { useParams } from 'react-router-dom';
import { useState } from 'react';
import annonces from '../datas/annonces.json';
import imgUp from '../assets/chevron-up.svg';
import imgDown from '../assets/chevron-down.svg';
import Rating from './Rating';
import '../styles/LogementsDetails.css';

function LogementsDetails () {

    const { id } = useParams();
    const logement = annonces.find((item) => item.id === id);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionOpen((prev) => !prev);
    };

    const toggleEquipments = () => {
        setIsEquipmentsOpen((prev) => !prev);
    };

    return (
        <section className='logement_section'>
            <div className='logement_div1'>
                <div key={logement.title}>
                    <h1 className='logement_title'>{logement.title}</h1>
                    <p className='logement_location'>{logement.location}</p>
                    <ul className='logement_tags'>
                        {logement.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="logement_host_name" key={logement.host.name}>
                    <div className='logement_host'>
                        <p className='logement_hostName'>{logement.host.name}</p>
                        <img className='logement_hostImg' src={logement.host.picture} alt={logement.host.name}/>
                    </div>
                    <Rating rating={logement.rating} />
                </div>
            </div>
            <div className='logement_div2'>
                <div className='logement_toggle'>
                    <div className='logement_description' onClick={toggleDescription}>
                        <p>Description</p>
                        <img src={isDescriptionOpen ? imgDown : imgUp} alt="chevron" className={`logement_chevronUpDown ${isDescriptionOpen ? 'open' : ''}`} />
                    </div>
                    {isDescriptionOpen && <div className="logement_description_content">{logement.description}</div>}
                </div>
                <div className='logement_toggle'>
                    <div className='logement_description' onClick={toggleEquipments}>
                        <p>Équipements</p>
                        <img 
                            src={isEquipmentsOpen ? imgDown : imgUp} 
                            alt="chevron" 
                            className={`logement_chevronUpDown ${isEquipmentsOpen ? 'open' : ''}`} 
                        />
                    </div>
                    {isEquipmentsOpen && (
                        <ul className="logement_equipments_content">
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    )
}

export default LogementsDetails