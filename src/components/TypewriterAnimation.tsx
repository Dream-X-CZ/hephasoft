'use client';

import { useEffect, useState } from 'react';

export default function TypewriterAnimation() {
  const xText = "<h1>";
  const yText = "Koveme vaše představy v digitální úspěchy.";
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<'typingX' | 'deletingX' | 'typingY'>("typingX");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typingX") {
      if (displayText.length < xText.length) {
        timer = setTimeout(() => {
          setDisplayText(xText.slice(0, displayText.length + 1));
        }, 200);
      } else {
        timer = setTimeout(() => {
          setPhase("deletingX");
        }, 1000);
      }
    } else if (phase === "deletingX") {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(xText.slice(0, displayText.length - 1));
        }, 150);
      } else {
        timer = setTimeout(() => {
          setPhase("typingY");
        }, 0);
      }
    } else if (phase === "typingY") {
      if (displayText.length < yText.length) {
        timer = setTimeout(() => {
          setDisplayText(yText.slice(0, displayText.length + 1));
        }, 150);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, phase]);

  return <span>{displayText}</span>;
}
