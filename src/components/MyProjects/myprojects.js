import React, { useEffect, useRef, useState } from "react";
import "./myprojects.css";

const stats = [
  { end: 18, suffix: "", label: "Projects Delivered" },
  { end: 12, suffix: "", label: "WordPress Sites" },
  { end: 6, suffix: "", label: "Shopify Stores" },
  { end: 3, suffix: "+", label: "Years of Experience" },
];

const MyProjects = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const animate = () => {
      const duration = 1600;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts(stats.map((stat) => Math.round(stat.end * eased)));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="my-projects" ref={sectionRef}>
      <h2 className="myprojects-title">
        Work That <strong>Delivers</strong> 
      </h2>
      
      <div className="myprojects-stats">
        {stats.map((stat, index) => (
          <div className="myprojects-stat" key={stat.label}>
            <span className="myprojects-number">
              {counts[index]}
              {stat.suffix}
            </span>
            <span className="myprojects-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
