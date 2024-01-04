
import { useState } from "react";
import slide1 from "../../assets/img/greek01.jpg";
import slide2 from "../../assets/img/greek02.jpg";
import slide3 from "../../assets/img/greek03.jpg";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import style from "../../Components/Slider/Slider.module.scss";

export function Slider() {
  const sliderArray = [slide1, slide2, slide3];
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex < sliderArray.length - 1) {
      setSlideIndex((prev) => prev + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const previousSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(sliderArray.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleSliderNav = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className={style.slider}>
      <div>
        <button onClick={() => previousSlide()}>
        <GoChevronLeft />
        </button>
        <h1>Dont forget</h1>
        <button onClick={() => nextSlide()}>
        <GoChevronRight />
        </button>
      </div>
      <img src={sliderArray[slideIndex]} alt="" />
      <section>
        {sliderArray.map((item, index) => {
          return (
            <span
              key={index}
              style={
                slideIndex === index
                  ? { backgroundColor: "rgb(129,120,113)" }
                  : null
              }
              onClick={() => handleSliderNav(index)}
            />
          );
        })}
      </section>
    </div>
  );
}