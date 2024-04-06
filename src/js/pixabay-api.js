const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43256533-5b873ba5582e6c8ca3cba67c9';

function getData(str) {
  const parameters = new URLSearchParams({
    key: API_KEY,
    q: str,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  });

  return fetch(`${BASE_URL}?${parameters}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
export { getData };