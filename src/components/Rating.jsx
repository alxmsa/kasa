import CareScale from "./Carescale";

function Rating({ rating }) {
    console.log({rating});
    return (
        <div>
            <CareScale careType="rating" scaleValue={rating} />
        </div>
    );
}

export default Rating;