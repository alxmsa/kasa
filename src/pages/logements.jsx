import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel'
import LogementsDetails from '../components/LogementsDetails'
import LogementDatas from '../datas/annonces.json'

function Logements() {

    const { id } = useParams();

    const logement = LogementDatas.find((item) => item.id === id);
  
    if (!logement) {
      // redirige vers la page d'erreur
      return <Navigate to="/error" />;
    }

    return (
        <section>
            <Carousel />
            <LogementsDetails />
        </section>
    )
}

export default Logements