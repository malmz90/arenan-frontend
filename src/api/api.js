export const getAllItems = () =>
  fetch('http://localhost:4000/items', {
    credentials: 'include',
  })
    .then((res) => res.json())
    .catch((error) => console.log('error', error))
