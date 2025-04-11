import { useParams } from 'react-router-dom';
import annonces from '../datas/annonces.json';
import Rating from './Rating';
import ToggleButton from './ToggleButton';

function LogementsDetails() {
  const { id } = useParams();
  const logement = annonces.find((item) => item.id === id);

  return (
    <section className='logement_section'>
      <div className='logement_div1'>
        <div>
          <h1 className='logement_title'>{logement.title}</h1>
          <p className='logement_location'>{logement.location}</p>
          <ul className='logement_tags'>
            {logement.tags.map((tag, index) => <li key={index}>{tag}</li>)}
          </ul>
        </div>
        <div className="logement_host_name">
          <div className='logement_host'>
            <p className='logement_hostName'>{logement.host.name}</p>
            <img className='logement_hostImg' src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className='logement_div2'>
        <div className='logement_toggle'>
            <div className='logement_toggle_width'> 
                <ToggleButton title="Description">
                    <div className="logement_description_content">
                        {logement.description}
                    </div>
                </ToggleButton>
            </div>
            <div className='logement_toggle_width'>
                <ToggleButton title="Équipements">
                  <ul className="logement_equipments_content">
                      {logement.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                      ))}
                  </ul>
                </ToggleButton>
            </div>
        
        </div>
      </div>
    </section>
  );
}

export default LogementsDetails;
