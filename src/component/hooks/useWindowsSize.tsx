import { useState, useEffect } from "react";

interface ISize {
  width: number;
  height: number;
}

const useWindowSize = (): ISize => {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
