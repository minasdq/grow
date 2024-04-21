import { useEffect, useState } from "react";

const useDimension = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const updateDimension = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    updateDimension();

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);
  return dimension;
};

export default useDimension;
