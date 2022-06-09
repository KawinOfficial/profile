import React from "react";
import Lottie from "react-lottie";
import loading from "./loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Loading({ h, w }) {
  return (
    <>
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={h}
        width={w}
      />
    </>
  );
}
