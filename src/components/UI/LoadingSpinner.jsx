import React from "react";
import styled from "styled-components";

const SpinnerDiv = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 500px;
    width: 100%;
  }

  & .loading-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & .loading-text h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    color: #10328c;
  }

  & .loading-text p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
  }

  .spinner {
    margin-block-end: 100px;
  }

  .lds-default {
    position: relative;
    width: 80px;
    height: 80px;
    transform: scale(2.7);
  }

  .lds-default div {
    transform: scale(1.8);
    position: absolute;
    width: 8px;
    height: 8px;
    background: #10328c;
    border-radius: 50%;
    animation: lds-default 1.2s linear infinite;
  }

  .lds-default div:nth-child(1) {
    animation-delay: 0s;
    top: 37px;
    left: 66px;
  }

  .lds-default div:nth-child(2) {
    animation-delay: -0.1s;
    top: 22px;
    left: 62px;
  }

  .lds-default div:nth-child(3) {
    animation-delay: -0.2s;
    top: 11px;
    left: 52px;
  }

  .lds-default div:nth-child(4) {
    animation-delay: -0.3s;
    top: 7px;
    left: 37px;
  }

  .lds-default div:nth-child(5) {
    animation-delay: -0.4s;
    top: 11px;
    left: 22px;
  }

  .lds-default div:nth-child(6) {
    animation-delay: -0.5s;
    top: 22px;
    left: 11px;
  }

  .lds-default div:nth-child(7) {
    animation-delay: -0.6s;
    top: 37px;
    left: 7px;
  }

  .lds-default div:nth-child(8) {
    animation-delay: -0.7s;
    top: 52px;
    left: 11px;
  }

  .lds-default div:nth-child(9) {
    animation-delay: -0.8s;
    top: 62px;
    left: 22px;
  }

  .lds-default div:nth-child(10) {
    animation-delay: -0.9s;
    top: 66px;
    left: 37px;
  }

  .lds-default div:nth-child(11) {
    animation-delay: -1s;
    top: 62px;
    left: 52px;
  }

  .lds-default div:nth-child(12) {
    animation-delay: -1.1s;
    top: 52px;
    left: 62px;
  }

  @keyframes lds-default {
    0%,
    20%,
    80%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.5);
    }
  }

  @media (max-width: 1000px) {
    .spinner {
      margin-block-end: 70px;
    }

    .lds-default {
      transform: scale(2.5);
    }
  }

  @media (max-width: 500px) {
    .spinner {
      margin-block-end: 40px;
    }

    .lds-default {
      transform: scale(1.5);
    }

    & .loading-text h1 {
      font-size: 26px;
    }

    & .loading-text p {
      font-size: 16px;
    }
  }
`;
const LoadingSpinner = () => {
  return (
    <SpinnerDiv className="pageloader">
      <div className="spinner">
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="loading-text">
        <h1>Loading...</h1>
        <p>This will only take a moment....</p>
      </div>
    </SpinnerDiv>
  );
};

export default LoadingSpinner;
