const BASE_URL = "http://localhost:8000"; // ganti sesuai server kamu

export const getImageUrl = (path) => {
  return `${BASE_URL}/${path}`;
};

export default getImageUrl;
