"use client";
import Lottie from "react-lottie-player";

export default function LottiePlayer({
  json,
  style,
}: {
  json: object;
  style: string;
}) {
  return <Lottie className={style} loop animationData={json} play />;
}
