export const getAllItems = () =>
	fetch('http://localhost:4000/items', {
		credentials: 'include',
	})
		.then((res) => res.json())
		.catch((error) => console.log('error', error));

export const buyItem = (item) =>
	fetch('http://localhost:4000/buy/item', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',

		body: JSON.stringify(item),
	});
