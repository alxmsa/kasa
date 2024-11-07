import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from '../assets/montagnes.jpeg'

function Carousel1() {
    return (
        <div>
            <Carousel>
                    <div>
                        <img src={img} alt=''/>
                        <p className="legend">1/4</p>
                    </div>
                    <div>
                        <img src={img} alt=''/>
                        <p className="legend">2/4</p>
                    </div>
                    <div>
                        <img src={img} alt=''/>
                        <p className="legend">3/4</p>
                    </div>
                    <div>
                        <img src={img} alt=''/>
                        <p className="legend">4/4</p>
                    </div>
                </Carousel>
                <div>

                </div>
            </div>
    )
}

export default Carousel1