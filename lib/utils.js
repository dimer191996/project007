import axios from "axios";

export const fetcher = (url) => fetch(url).then((res) => res.json());

// Check if element is visible inside the viewport
