import React from "react";
import { Back, Card, Front, Input, Label, Wrap } from "./WordCard.styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Slider.css";

import words from "../../words.json";

const WordCard = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const w = (qwe) => {
    console.log(qwe);
  };

  return (
    <Wrap>
      {words && (
        <Slider {...sliderSettings} style={{ margin: "50px auto" }}>
          {words.words.map((word, index) => (
            <div key={word.id}>
              <p onChange={() => w(index)}>
                {index + 1} из {words.words.length} слов
              </p>
              <Label>
                <Input type="checkbox" />
                <Card>
                  <Front>{word.en}</Front>
                  <Back>{word.ru}</Back>
                </Card>
              </Label>
            </div>
          ))}
        </Slider>
      )}
    </Wrap>
  );
};

export default WordCard;
