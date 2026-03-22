"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-on-scroll").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
