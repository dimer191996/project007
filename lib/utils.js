import axios from "axios";

export const fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

// Check if element is visible inside the viewport
export const isInViewport = (element) => {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
