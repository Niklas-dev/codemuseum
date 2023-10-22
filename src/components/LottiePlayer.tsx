"use client";
import Lottie from "react-lottie-player";

export default function LottiePlayer({
  json,
  style,
  speed,
}: {
  json: object;
  style: string;
  speed: number;
}) {
  return (
    <Lottie className={style} loop animationData={json} play speed={speed} />
  );
}
