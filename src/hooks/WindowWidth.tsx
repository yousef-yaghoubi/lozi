import { useEffect, useState } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default useWindowWidth;
