import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

  function Number({ n }) {
    const ref = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const { number } = useSpring({
      from: { number:isIntersecting ? 0 : n  },  // Start from 0 if not intersecting
      number : n,
    //   number: isIntersecting? n: 0,  Animate to 0 if not intersecting
      delay: 400,
      config: { mass: 2, tension: 10, friction: 10 },
    });
     // Set up the Intersection Observer
     useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            setIsIntersecting(entry.isIntersecting);
          });
        });
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          observer.disconnect(); // Clean up the observer when the component unmounts
        };
      }, []);
  
    return <animated.div ref={ref}>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  export default Number;