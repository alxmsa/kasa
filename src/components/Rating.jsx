import CareScale from "./Carescale";
import '../styles/Rating.css';

function Rating({ rating }) {
    console.log({rating});
    return (
        <div className="rating">
            <CareScale careType="rating" scaleValue={rating} />
        </div>
    );
}

export default Rating;