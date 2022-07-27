export const pushElements = (data) => {
  const elements = [];
  for (let i = 0; i < data.length; i += 1) {
    if (!elements.includes(data[i].attribute)) { elements.push(data[i].attribute); }
  }
  console.log(elements);
};

const elements = async () => {
  const apiUrl = 'https://api.epicsevendb.com';
  const response = await fetch(`${apiUrl}/hero`, { method: 'GET' });
  const data = await response.json();
  console.log(data.results);
  return pushElements(data.results);
};
export default elements;
