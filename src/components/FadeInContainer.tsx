"use client";
import { useInView } from "react-intersection-observer";

export default function FadeInContainer({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`h-fit w-full hidden-object ${inView && "show-object"}`}
    >
      {children}
    </div>
  );
}
