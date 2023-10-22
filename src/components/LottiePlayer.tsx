"use client";
import Lottie from "react-lottie-player";

export default function LottiePlayer({
  json,
  height,
  width,
}: {
  json: object;
  height: number;
  width: number;
}) {
  return (
    <Lottie
      loop
      animationData={json}
      play
      speed={0.2}
      style={{ width: height, height: width }}
    />
  );
}
