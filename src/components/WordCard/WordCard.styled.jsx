import styled from "styled-components";

export const Wrap = styled.div`
  margin: 0 auto;
  width: 400px;
`;

export const Label = styled.label`
  display: block;
  width: 300px;
  height: 200px;
  margin: 0 auto;
  perspective: 1000px;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover div {
    box-shadow: 0 20px 20px rgba(255, 255, 255, 0.1);
  }

  &:hover :checked + div {
    box-shadow: 0 10px 10px rgba(255, 255, 255, 0.1);
  }
`;

export const Card = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: all 600ms;
  z-index: 20;
`;

export const Front = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #fff;
  text-align: center;
  line-height: 200px;
  backface-visibility: hidden;
  border-radius: 2px;
`;

export const Back = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 200px;
  backface-visibility: hidden;
  border-radius: 2px;
  background: #222;
  color: #808191;
  transform: rotateX(180deg);
`;

export const Input = styled.input`
  display: none;

  &:checked + div {
    transform: rotateX(180deg);
  }
`;
