"use client";

import { useEffect } from "react";
import lottie from "lottie-web";

function AnimationLottie({ animationData }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // This code will only run on the client side
      lottie.loadAnimation({
        container: document.getElementById("lottie-animation"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, [animationData]);

  return <div id="lottie-animation"></div>;
}

export default AnimationLottie;
