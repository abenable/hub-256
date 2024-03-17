import { useState } from "react";
import Container from "react-bootstrap/Container";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import firstImg from "./first.jpg";
import secondImg from "./second.jpg";
import thirdImg from "./third.jpg";

function IntroCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ height: "70vh" }}>
          <Image alt="First slide" src={firstImg} fluid />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "70vh" }}>
          <Image alt="Second slide" src={secondImg} fluid />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "70vh" }}>
          <Image alt="Third slide" src={thirdImg} fluid />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default IntroCarousel;
