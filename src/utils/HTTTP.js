
export const GET = (baseUrl) => {
  return fetch(baseUrl).then(res => res.json());
};