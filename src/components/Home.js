import Carousel from "react-bootstrap/Carousel";
import "./home.css";

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="first slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/16124727/pexels-photo-16124727/free-photo-of-a-necklace-an-a-box-on-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6311250/pexels-photo-6311250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
