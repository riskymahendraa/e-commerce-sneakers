const BASE_URL = "http://localhost:8000"; // ganti sesuai server kamu

export const getImageUrl = (path) => {
  if (!path) return "https://via.placeholder.com/150"; // fallback
  return `${BASE_URL}/${path}`;
};
