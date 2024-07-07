import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (matches !== media.matches) {
      setMatches(media.matches);
    }
    function resizeHandler() {
      setMatches(media.matches);
    }
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [matches, query]);

  return matches;
};
