import StarG from '../assets/star-solid_grey.svg';
import StarR from '../assets/star-solid_red.svg';

function CareScale({ scaleValue }) {
    const range = [1, 2, 3, 4, 5];
    return (
        <div>
            {range.map((rangeElem) =>
                rangeElem <= scaleValue ? (
                    <img key={rangeElem} src={StarR} alt='star-solid-red' />
                ) : (
                    <img key={rangeElem} src={StarG} alt='star-solid-grey' />
                )
            )}
        </div>
    );
}
export default CareScale;