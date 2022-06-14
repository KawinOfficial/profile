import React from "react";
import Lottie from "react-lottie";
import scollMouse from "./scollMouse.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: scollMouse,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Scroll({ w, h }) {
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
