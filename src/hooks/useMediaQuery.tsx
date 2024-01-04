import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [isMatches, setIsMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    if (mql.matches !== isMatches) setIsMatches(mql.matches);

    const resizer = () => {
      return setIsMatches(mql.matches);
    };

    window.addEventListener("resize", resizer);
    return () => window.removeEventListener("resize", resizer);
  }, [query, isMatches]);

  return isMatches;
};
