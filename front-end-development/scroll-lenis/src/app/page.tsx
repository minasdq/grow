"use client";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Column from "./components/Column";
import classes from "./styles/page.module.scss";
import Lenis from "@studio-freight/lenis";
import useDimension from "@/hooks/useDimension";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const { height } = useDimension();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={classes.main}>
      <div className={classes.spacer} />
      <div ref={containerRef} className={classes.gallery}>
        <Column images={images.slice(0, 3)} y={y1} />
        <Column images={images.slice(3, 6)} y={y2} />
        <Column images={images.slice(6, 9)} y={y3} />
        <Column images={images.slice(9, 12)} y={y4} />
      </div>
      <div className={classes.spacer} />
    </main>
  );
}
