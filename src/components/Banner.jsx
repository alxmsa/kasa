import {Link} from 'react-router-dom'

function Banner() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/questionnaire">Questionnaire</Link>
        </nav>
    )
}

export default Banner