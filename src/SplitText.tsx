// SplitText.tsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 80,
  duration = 0.7,
  ease = "power4.out",
  splitType = "chars",
  from = { opacity: 0, y: 60 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontsLoaded(true));
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !fontsLoaded) return;
      const el = ref.current as HTMLElement & {
        _split?: GSAPSplitText;
      };

      el._split?.revert();

      const split = new GSAPSplitText(el, {
        type: splitType,
        charsClass: "split-char",
        wordsClass: "split-word",
        linesClass: "split-line",
      });

      const targets = splitType.includes("chars") ? split.chars : split.words;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
          onComplete: onLetterAnimationComplete,
        }
      );

      el._split = split;

      return () => split.revert();
    },
    { dependencies: [text, fontsLoaded] }
  );

  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        display: "block", // 🔥 KEY FIX
        width: "100%",
        overflow: "hidden",
      }}
    >
      {text}
    </Tag>
  );
};

export default SplitText;
