"use client";

import { useEffect } from "react";

const RippleEffect = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const ripple = document.createElement("span");

      ripple.className = "ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;

      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null; // This component just attaches the effect
};

export default RippleEffect;
