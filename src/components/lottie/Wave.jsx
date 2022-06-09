import React from "react";
import Lottie from "react-lottie";
import wave from "./wave.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: wave,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Wave({ h, w }) {
  return (
    <>
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={h}
        width={w}
        style={{ transform: "scaleY(-1)", position: "absolute", zIndex: -5 }}
      />
    </>
  );
}
