import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

function Caro() {
  return (
    <Carousel infiniteLoop autoFocus showStatus="false">
      <div>
        <img
          className="legend"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6CqA2q8pitdBZepsjOmXannIMhsA9UyI6OQ&usqp=CAU"
          alt="zikr"
        />
        <p className="legend">
          <h1>
            vcnbcbncb cbvbvcbnvc cbvbnvcbvc vcbbnvcb bvcbvc bbvcbv bvc vb bvcbvc
            bvcbvc bncbvcbvcbvcbvc bvcbvcb vc bcvcbv
          </h1>
        </p>
      </div>
      <div>
        <img
          src="https://media.islamicity.org/wp-content/uploads/2017/10/iStock-628846748Prayer.jpg"
          alt="prayer"
        />
        <p className="legend">
          {" "}
          <h1>
            vcnbcbncb cbvbvcbnvc cbvbnvcbvc vcbbnvcb bvcbvc bbvcbv bvc vb bvcbvc
            bvcbvc bncbvcbvcbvcbvc bvcbvcb
          </h1>
        </p>
      </div>
      <div>
        <img
          src="https://c.ndtvimg.com/2020-04/pnod9ttc_ramadan_625x300_23_April_20.jpg"
          alt="fasting"
        />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img
          src="https://c.ndtvimg.com/2020-04/pnod9ttc_ramadan_625x300_23_April_20.jpg"
          alt="meditation"
        />
        <p className="legend">Legend 4</p>
      </div>
    </Carousel>
  );
}

export default Caro;
